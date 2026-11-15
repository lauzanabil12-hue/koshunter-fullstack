import { useState } from 'react';

export default function KosForm({ onTambahKos }) {
  const [namaKos, setNamaKos] = useState('');
  const [tipeKos, setTipeKos] = useState('Putri');
  const [hargaPerBulan, setHargaPerBulan] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [tersedia, setTersedia] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!namaKos.trim() || !hargaPerBulan || !lokasi.trim()) return;

    const sukses = await onTambahKos({
      namaKos: namaKos.trim(),
      tipeKos,
      hargaPerBulan: Number(hargaPerBulan),
      lokasi: lokasi.trim(),
      tersedia,
    });

    if (sukses) {
      setNamaKos('');
      setTipeKos('Putri');
      setHargaPerBulan('');
      setLokasi('');
      setTersedia(true);
    }
  };

  return (
    <div className="card border-0 shadow-sm p-3 mb-4">
      <h5 className="fw-bold text-secondary mb-3">Tambah Data Kos Baru</h5>
      <form onSubmit={handleSubmit} className="row g-2 align-items-center">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nama Kos (min. 3 huruf)"
            value={namaKos}
            onChange={(e) => setNamaKos(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={tipeKos}
            onChange={(e) => setTipeKos(e.target.value)}
          >
            <option value="Putri">Khusus Putri</option>
            <option value="Putra">Khusus Putra</option>
            <option value="Campur">Campur</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Harga/Bulan"
            value={hargaPerBulan}
            onChange={(e) => setHargaPerBulan(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Lokasi (min. 5 huruf)"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2 d-flex gap-2">
          <div className="form-check d-flex align-items-center me-1">
            <input
              className="form-check-input me-1"
              type="checkbox"
              id="checkTersedia"
              checked={tersedia}
              onChange={(e) => setTersedia(e.target.checked)}
            />
            <label className="form-check-label small" htmlFor="checkTersedia">
              Tersedia
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 fw-bold">
            + Tambah
          </button>
        </div>
      </form>
    </div>
  );
}