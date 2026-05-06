export interface Blog {
  id?: string;
  nama: string;
  nama_en: string;
  deskripsi: string;
  deskripsi_en: string;
  foto: string;
  ditampilkan_di_landing_page: boolean;
  urutan?: number;
  createdAt: number;
}
