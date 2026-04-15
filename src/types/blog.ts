export interface Blog {
  id?: string;
  nama: string;
  deskripsi: string;
  foto: string;
  ditampilkan_di_landing_page: boolean;
  urutan?: number;
  createdAt: number;
}
