import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SummaryCard from './components/SummaryCard';
import KosForm from './components/KosForm';
import KosList from './components/KosList';
import TestimonialList from './components/TestimonialList';

const API_URL = 'http://localhost:3000/kos';

export default function App() {
  const [dataKos, setDataKos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // 1. GET: Ambil semua data kos dari backend NestJS
  const fetchKos = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Gagal mengambil data kos dari server');
      const data = await res.json();
      setDataKos(data);
      setErrorMsg('');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKos();
  }, []);

  // 2. POST: Tambah data kos baru ke backend
  const handleTambahKos = async (kosBaru) => {
    try {
      setErrorMsg('');
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(kosBaru),
      });

      const result = await res.json();
      if (!res.ok) {
        const pesan = Array.isArray(result.message)
          ? result.message.join(', ')
          : result.message;
        throw new Error(pesan || 'Gagal menambahkan data kos');
      }

      setDataKos((prev) => [...prev, result]);
      return true;
    } catch (err) {
      setErrorMsg(err.message);
      return false;
    }
  };

  // 3. PATCH: Ubah data kos di backend
  const handleEditKos = async (id, dataUpdate) => {
    try {
      setErrorMsg('');
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataUpdate),
      });

      const result = await res.json();
      if (!res.ok) {
        const pesan = Array.isArray(result.message)
          ? result.message.join(', ')
          : result.message;
        throw new Error(pesan || 'Gagal mengubah data kos');
      }

      setDataKos((prev) =>
        prev.map((item) => (item.id === id ? result : item))
      );
      return true;
    } catch (err) {
      setErrorMsg(err.message);
      return false;
    }
  };

  // 4. DELETE: Hapus data kos di backend
  const handleHapusKos = async (id) => {
    try {
      setErrorMsg('');
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message || 'Gagal menghapus data kos');
      }

      setDataKos((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container mb-5 flex-grow-1">
        <SummaryCard totalKos={dataKos.length} />

        {/* Komponen BAB 7 AJAX */}
        <TestimonialList />

        {errorMsg && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error API:</strong> {errorMsg}
            <button
              type="button"
              className="btn-close"
              onClick={() => setErrorMsg('')}
            ></button>
          </div>
        )}

        <KosForm onTambahKos={handleTambahKos} />

        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-2 text-muted">Menghubungkan ke backend NestJS...</p>
          </div>
        ) : (
          <KosList
            dataKos={dataKos}
            onEditKos={handleEditKos}
            onHapusKos={handleHapusKos}
          />
        )}
      </div>
      <footer className="text-center py-3 text-muted border-top bg-white mt-auto">
        <small>&copy; 2026 KosHunter - Aplikasi KosHunter</small>
      </footer>
    </div>
  );
}