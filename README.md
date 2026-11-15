## Dokumentasi Pengujian (Screenshot)

### Pengujian Endpoint REST API (`test.http`)
1. **GET Semua Data Kos (`200 OK`)**
   ![GET All](docs/SS-9-1-get-all.png)

2. **POST Tambah Kos Baru (`201 Created`)**
   ![POST Create](docs/SS-9-2-post-create.png)

3. **GET Detail Kos by ID (`200 OK`)**
   ![GET One](docs/SS-9-3-get-one.png)

4. **PATCH Update Data Kos (`200 OK`)**
   ![PATCH Update](docs/SS-9-4-patch-update.png)

5. **DELETE Hapus Data Kos (`200 OK`)**
   ![DELETE](docs/SS-9-5-delete.png)

6. **Error Handling `409 Conflict` (Nama Kos Duplikat)**
   ![Error 409](docs/SS-9-6-error-409-conflict.png)

7. **Error Handling `404 Not Found` (ID Tidak Ditemukan)**
   ![Error 404](docs/SS-9-7-error-404-notfound.png)

8. **Error Handling `400 Bad Request` (Validasi DTO Gagal)**
   ![Error 400](docs/SS-9-8-error-400-validation.png)

### Integrasi Frontend React & Backend NestJS
9. **Tambah Data Kos dari Halaman Web (`POST`)**
   ![Frontend Tambah](docs/SS-9-9-frontend-tambah.png)

10. **Edit Data Kos dari Halaman Web (`PATCH`)**
    ![Frontend Edit](docs/SS-9-10-frontend-edit.png)

11. **Hapus Data Kos dari Halaman Web (`DELETE`)**
    ![Frontend Hapus](docs/SS-9-11-frontend-hapus.png)