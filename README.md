🚀 Proje Yol Haritası
1. Proje Yapısının Belirlenmesi
Django: Back-end, API, veritabanı ve admin panelini yönetmek için.
React: Kullanıcı arayüzü (UI) geliştirmek için.
PostgreSQL veya SQLite: Veritabanı yönetimi için.
Docker (Opsiyonel): Projeyi konteynerize etmek için.
2. Proje Yapısının Kurulumu
Django Projesi:

bash
Kopyala
Düzenle
django-admin startproject mobilya_backend
cd mobilya_backend
python manage.py startapp products
React Projesi:

bash
Kopyala
Düzenle
npx create-react-app mobilya-frontend
cd mobilya-frontend
API Bağlantısı: Django'da Django Rest Framework (DRF) ile RESTful API endpoint'leri oluşturup React ile bağlamak.

3. Ana Özellikler
Ana Sayfa: Hero banner, yeni koleksiyonlar, öne çıkan ürünler.
Ürünler Sayfası: Kategorilere göre filtreleme, sıralama.
Ürün Detay Sayfası: Ürün açıklaması, galeri, fiyat.
Admin Panel: Ürün ekleme, güncelleme, silme.
Favoriler ve Sepet: Kullanıcılar beğendiği ürünleri kaydedebilmeli.
İletişim Sayfası: Google Maps entegrasyonu ve form.
Blog veya Tanıtım Sayfası: Mobilya tasarımı ile ilgili içerikler.
Ödeme Entegrasyonu: (Opsiyonel) Stripe veya iyzico entegrasyonu.
4. Kullanılacak Teknolojiler
Front-end: React, Tailwind CSS veya Bootstrap, Axios (API istekleri için).
Back-end: Django, DRF.
Veritabanı: PostgreSQL veya SQLite.
Diğer: Docker, GitHub Actions (CI/CD), Nginx (Deployment).
5. Geliştirme Adımları
Django'da modelleri ve API endpoint'lerini oluştur.
React ile arayüz bileşenlerini geliştir.
Axios ile API'den verileri çek.
Admin panelini ve kullanıcı arayüzünü test et.
Deployment: DigitalOcean, Heroku veya bir VPS'e siteyi canlıya al.
