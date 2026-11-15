import { useState } from 'react';

export default function KosItem({ item, index, onEditKos, onHapusKos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [namaKos, setNamaKos] = useState(item.namaKos);
  const [tipeKos, setTipeKos] = useState(item.tipeKos);
  const [hargaPerBulan, setHargaPerBulan] = useState(item.hargaPerBulan);
  const [lokasi, setLokasi] = useState(item.lokasi);
  const [tersedia, setTersedia] = useState(item.tersedia);

  const badgeColor =
    item.tipeKos === 'Putri'
      ? 'bg-danger'
      : item.tipeKos === 'Putra'
      ? 'bg-primary'
      : 'bg-warning text-dark';

  const handleSave = async () => {
    const sukses = await onEditKos(item.id, {
      namaKos: namaKos.trim(),
      tipeKos,
      hargaPerBulan: Number(hargaPerBulan),
      lokasi: lokasi.trim(),
      tersedia,
    });
    if (sukses) {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <tr className="table-warning">
        <td>{index + 1}</td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={namaKos}
            onChange={(e) => setNamaKos(e.target.value)}
          />
        </td>
        <td>
          <select
            className="form-select form-select-sm"
            value={tipeKos}
            onChange={(e) => setTipeKos(e.target.value)}
          >
            <option value="Putri">Putri</option>
            <option value="Putra">Putra</option>
            <option value="Campur">Campur</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            className="form-control form-control-sm"
            value={hargaPerBulan}
            onChange={(e) => setHargaPerBulan(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
        </td>
        <td>
          <select
            className="form-select form-select-sm"
            value={tersedia ? 'true' : 'false'}
            onChange={(e) => setTersedia(e.target.value === 'true')}
          >
            <option value="true">Tersedia</option>
            <option value="false">Penuh</option>
          </select>
        </td>
        <td>
          <div className="d-flex gap-1">
            <button className="btn btn-sm btn-success" onClick={handleSave}>
              Simpan
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Batal
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="fw-semibold">{item.namaKos}</td>
      <td>
        <span className={`badge ${badgeColor}`}>{item.tipeKos}</span>
      </td>
      <td>Rp {item.hargaPerBulan.toLocaleString('id-ID')}</td>
      <td>{item.lokasi}</td>
      <td>
        <span
          className={`badge ${
            item.tersedia ? 'bg-success' : 'bg-secondary'
          }`}
        >
          {item.tersedia ? 'Tersedia' : 'Penuh'}
        </span>
      </td>
      <td>
        <div className="d-flex gap-1">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onHapusKos(item.id)}
          >
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
}