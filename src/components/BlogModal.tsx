import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Blog } from "../types/blog";
import { uploadBlogImage } from "../services/blogService";
import { X, Upload, Loader2 } from "lucide-react";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Blog, "id" | "createdAt">) => Promise<void>;
  initialData?: Blog | null;
}

const BlogModal = ({ isOpen, onClose, onSubmit, initialData }: BlogModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    foto: "",
    ditampilkan_di_landing_page: false
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        nama: initialData.nama,
        deskripsi: initialData.deskripsi,
        foto: initialData.foto,
        ditampilkan_di_landing_page: initialData.ditampilkan_di_landing_page
      });
    } else {
      setFormData({ nama: "", deskripsi: "", foto: "", ditampilkan_di_landing_page: false });
      setImageFile(null);
    }
  }, [initialData, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = formData.foto;
      if (imageFile) {
        imageUrl = await uploadBlogImage(imageFile);
      }
      await onSubmit({ ...formData, foto: imageUrl });
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-surface w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">{initialData ? t('adminBlog.editTitle') : t('adminBlog.addTitle')}</h3>
          <button onClick={onClose} className="text-foreground-muted hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">{t('adminBlog.titleLabel')}</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">{t('adminBlog.descLabel')}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none resize-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-2">{t('adminBlog.photoLabel')}</label>
                <div className="relative group cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="h-40 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center bg-background/50 group-hover:border-accent transition-colors overflow-hidden">
                    {imageFile ? (
                      <img src={URL.createObjectURL(imageFile)} className="w-full h-full object-cover" />
                    ) : formData.foto ? (
                      <img src={formData.foto} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <Upload className="text-foreground-muted mb-2" />
                        <span className="text-xs text-foreground-muted">{t('adminBlog.uploadHint')}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-white/5">
                <input
                  type="checkbox"
                  id="landing"
                  checked={formData.ditampilkan_di_landing_page}
                  onChange={(e) => setFormData({ ...formData, ditampilkan_di_landing_page: e.target.checked })}
                  className="w-5 h-5 rounded border-white/10 bg-background text-accent focus:ring-accent"
                />
                <label htmlFor="landing" className="text-sm text-white cursor-pointer">{t('adminBlog.showLanding')}</label>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-xl text-foreground-muted hover:text-white transition-colors">{t('adminBlog.cancel')}</button>
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-accent/80 text-white px-8 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? t('adminBlog.saving') : t('adminBlog.save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;