import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { getAllBlogs, deleteBlog, createBlog, updateBlog } from "../services/blogService";
import type { Blog } from "../types/blog";
import BlogModal from "../components/BlogModal";

const AdminBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Daftar Blog</h2>
            <button
              className="bg-accent hover:bg-accent/80 text-white px-5 py-2 rounded-lg transition-all text-sm font-medium shadow-lg"
              onClick={handleAddClick}
            >
              + Tambah Blog Baru
            </button>
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
                    <th className="py-4 px-4 font-medium">Tampil di Depan</th>
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
                      <td className="py-4 px-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${blog.ditampilkan_di_landing_page ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-white/5 text-foreground-muted border border-white/10'}`}>
                          {blog.ditampilkan_di_landing_page ? 'Ya' : 'Tidak'}
                        </span>
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
    </div>
  );
};

export default AdminBlog;