## Endpoint REST API (`/kos`)
- `GET /kos` — Mengambil seluruh daftar kos (`200 OK`)
- `GET /kos/:id` — Mengambil detail kos berdasarkan ID (`200 OK` / `404 Not Found`)
- `POST /kos` — Menambah data kos baru dengan validasi DTO (`201 Created` / `400 Bad Request` / `409 Conflict`)
- `PATCH /kos/:id` — Memperbarui data kos (`200 OK` / `404 Not Found`)
- `DELETE /kos/:id` — Menghapus data kos (`200 OK` / `404 Not Found`)

---

## Dokumentasi Pengujian (Screenshot)

### Pengujian Endpoint REST API (`test.http`)
1. **GET Semua Data Kos (`200 OK`)**

   ![GET All](docs/screenshots/SS-9-1-get-all.png)

2. **POST Tambah Kos Baru (`201 Created`)**

   ![POST Create](docs/screenshots/SS-9-2-post-create.png)

3. **GET Detail Kos by ID (`200 OK`)**

   ![GET One](docs/screenshots/SS-9-3-get-one.png)

4. **PATCH Update Data Kos (`200 OK`)**

   ![PATCH Update](docs/screenshots/SS-9-4-patch-update.png)

5. **DELETE Hapus Data Kos (`200 OK`)**

   ![DELETE](docs/screenshots/SS-9-5-delete.png)

6. **Error Handling `409 Conflict` (Nama Kos Duplikat)**

   ![Error 409](docs/screenshots/SS-9-6-error-409-conflict.png)

7. **Error Handling `404 Not Found` (ID Tidak Ditemukan)**

   ![Error 404](docs/screenshots/SS-9-7-error-404-notfound.png)

8. **Error Handling `400 Bad Request` (Validasi DTO Gagal)**

   ![Error 400](docs/screenshots/SS-9-8-error-400-validation.png)

### Integrasi Frontend React & Backend NestJS
9. **Tambah Data Kos dari Halaman Web (`POST`)**

   ![Frontend Tambah](docs/screenshots/SS-9-9-frontend-tambah.png)

10. **Edit Data Kos dari Halaman Web (`PATCH`)**

    ![Frontend Edit](docs/screenshots/SS-9-10-frontend-edit.png)

11. **Hapus Data Kos dari Halaman Web (`DELETE`)**

    ![Frontend Hapus](docs/screenshots/SS-9-11-frontend-hapus.png)