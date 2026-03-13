# 🍕 Teknolojik Yemekler - Pizza Sipariş Uygulaması

Bu proje, acıkan yazılımcılar için tasarlanmış modern bir pizza sipariş web uygulamasıdır. Kullanıcıların pizza seçimlerini özelleştirebildiği, ek malzemeler seçebildiği ve siparişlerini tamamlayabildiği bir Single Page Application (SPA) deneyimi sunar.

## 🚀 Özellikler

- **Anasayfa:** Dikkat çekici görseller ve "Acıktım" butonu ile sipariş sürecine hızlı giriş.
- **Sipariş Formu:** 
  - Boyut seçimi (Küçük, Orta, Büyük).
  - Hamur kalınlığı seçimi.
  - Geniş ek malzeme seçenekleri.
  - Sipariş notu ekleme alanı.
  - Dinamik fiyat hesaplama (Adet ve ek malzeme bazlı).
- **Sipariş Onayı:** Başarıyla tamamlanan siparişlerin ardından gösterilen onay sayfası.
- **Validasyon:** Hatalı veya eksik form girişlerini engelleyen kullanıcı dostu geri bildirimler.

## 🛠️ Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü kütüphanesi.
- **Vite:** Hızlı geliştirme ortamı ve yapı aracı.
- **React Router:** Sayfalar arası geçiş ve yönlendirme.
- **Axios:** Sipariş verilerini API'ye göndermek için HTTP istemcisi.
- **Sonner:** Şık ve modern bildirim mesajları.
- **Cypress:** E2E (Uçtan uca) testler.
- **Vanilla CSS:** Özelleştirilmiş ve modern arayüz tasarımı.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyin:

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Uygulamayı geliştirme modunda başlatın:
   ```bash
   npm run dev
   ```

3. Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı görüntüleyin.

## 🧪 Testler

Cypress testlerini çalıştırmak için:

```bash
npx cypress open
```

## 📂 Proje Yapısı

- `src/components`: Tekrar kullanılabilir arayüz bileşenleri.
- `src/pages`: Anasayfa, Form ve Onay sayfaları.
- `src/App.jsx`: Rota tanımlamaları ve ana uygulama yapısı.
- `cypress/`: Uygulama test senaryoları.

---
*Bu proje bir Workintech sprint challenge'ı kapsamında geliştirilmiştir.*
