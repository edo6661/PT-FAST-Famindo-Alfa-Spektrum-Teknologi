import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { getAllBlogs, deleteBlog, createBlog, updateBlog, updateLandingPageOrder, seedDummyBlogs } from "../services/blogService";
import type { Blog } from "../types/blog";
import BlogModal from "../components/BlogModal";
import { Settings2, X } from "lucide-react";

const AdminBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);


  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);
  const [landingSlots, setLandingSlots] = useState<(string | null)[]>([null, null, null]);
  const [savingLanding, setSavingLanding] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
      alert("Gagal mengambil data blog dari server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus blog ini?");
    if (!confirmDelete) return;

    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error("Gagal menghapus blog:", error);
      alert("Gagal menghapus blog.");
    }
  };

  const handleAddClick = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (data: Omit<Blog, "id" | "createdAt">) => {
    try {
      if (editingBlog && editingBlog.id) {
        await updateBlog(editingBlog.id, data);
      } else {
        await createBlog(data);
      }
      fetchBlogs();
    } catch (error) {
      console.error("Error saving data:", error);
      throw error;
    }
  };


  const openLandingModal = () => {
    const landingBlogs = blogs
      .filter((b) => b.ditampilkan_di_landing_page)
      .sort((a, b) => (a.urutan || 0) - (b.urutan || 0));

    const initialSlots: (string | null)[] = [null, null, null];
    landingBlogs.forEach((b, i) => {
      if (i < 3) initialSlots[i] = b.id!;
    });

    setLandingSlots(initialSlots);
    setIsLandingModalOpen(true);
  };

  const handleSaveLanding = async () => {
    setSavingLanding(true);
    try {
      await updateLandingPageOrder(blogs, landingSlots);
      setIsLandingModalOpen(false);
      fetchBlogs();
    } catch (error) {
      console.error("Gagal menyimpan urutan:", error);
      alert("Gagal menyimpan urutan landing page.");
    } finally {
      setSavingLanding(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold">Manajemen Blog</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-6 py-2 rounded-full transition-all text-sm font-medium"
          >
            Logout
          </button>
        </div>

        <div className="bg-surface p-8 rounded-2xl border border-white/10 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold">Daftar Blog</h2>
            <div className="flex gap-3">
              <button
                className="bg-purple-500/10 border border-purple-500 text-purple-400 hover:bg-purple-500/20 px-5 py-2 rounded-lg transition-all text-sm font-medium shadow-lg"
                onClick={async () => {
                  if (window.confirm('Yakin mau generate 25 blog dummy?')) {
                    await seedDummyBlogs(25);
                    fetchBlogs();
                  }
                }}
              >
                Generate 25 Dummy Blogs
              </button>
              <button
                className="bg-surface border border-accent text-accent hover:bg-accent/10 px-5 py-2 rounded-lg transition-all text-sm font-medium shadow-lg flex items-center gap-2"
                onClick={openLandingModal}
              >
                <Settings2 size={16} /> Atur Posisi Landing Page
              </button>
              <button
                className="bg-accent hover:bg-accent/80 text-white px-5 py-2 rounded-lg transition-all text-sm font-medium shadow-lg"
                onClick={handleAddClick}
              >
                + Tambah Blog Baru
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-10 text-foreground-muted">Memuat data...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-10 border border-white/5 rounded-xl bg-background/50 text-foreground-muted">
              Belum ada artikel blog.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-foreground-muted">
                    <th className="py-4 px-4 font-medium">Foto</th>
                    <th className="py-4 px-4 font-medium">Judul</th>
                    <th className="py-4 px-4 font-medium text-center">Tampil di Depan</th>
                    <th className="py-4 px-4 font-medium">Tanggal Dibuat</th>
                    <th className="py-4 px-4 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="py-4 px-4">
                        <img src={blog.foto} alt={blog.nama} className="w-16 h-16 object-cover rounded-lg border border-white/10" />
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-white">{blog.nama}</div>
                        <div className="text-xs text-foreground-muted truncate max-w-xs">{blog.deskripsi}</div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {blog.ditampilkan_di_landing_page ? (
                          <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-medium tracking-wide">
                            Ya (Posisi {blog.urutan})
                          </span>
                        ) : (
                          <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-foreground-muted border border-white/10">
                            Tidak
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-foreground-muted">
                        {new Date(blog.createdAt).toLocaleDateString('id-ID')}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          className="text-accent hover:text-white text-sm mr-4 transition-colors"
                          onClick={() => handleEditClick(blog)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-400 hover:text-red-300 text-sm transition-colors"
                          onClick={() => handleDelete(blog.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={editingBlog}
      />

      {/* --- MODAL PENGATURAN LANDING PAGE --- */}
      {isLandingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">Atur Posisi Blog Landing Page</h3>
              <button onClick={() => setIsLandingModalOpen(false)} className="text-foreground-muted hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-foreground-muted mb-2">
                Pilih maksimal 3 blog. Posisi 1 akan berada di paling kiri, Posisi 2 di tengah, dan Posisi 3 di paling kanan.
              </p>

              {[0, 1, 2].map((index) => (
                <div key={index} className="flex flex-col">
                  <label className="text-sm font-semibold text-white mb-2">
                    Posisi {index + 1} {index === 0 ? "(Paling Kiri)" : index === 1 ? "(Tengah)" : "(Paling Kanan)"}
                  </label>
                  <select
                    value={landingSlots[index] || ""}
                    onChange={(e) => {
                      const newSlots = [...landingSlots];
                      newSlots[index] = e.target.value || null;
                      setLandingSlots(newSlots);
                    }}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none appearance-none"
                  >
                    <option value="">-- Kosongkan Slot --</option>
                    {blogs.map((b) => (
                      <option
                        key={b.id}
                        value={b.id!}
                        disabled={landingSlots.includes(b.id!) && landingSlots[index] !== b.id}
                      >
                        {b.nama}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/10 flex justify-end gap-4">
              <button onClick={() => setIsLandingModalOpen(false)} className="px-6 py-2.5 rounded-xl text-foreground-muted hover:text-white transition-colors">Batal</button>
              <button
                onClick={handleSaveLanding}
                disabled={savingLanding}
                className="bg-accent hover:bg-accent/80 text-white px-8 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {savingLanding ? "Menyimpan..." : "Simpan Urutan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;