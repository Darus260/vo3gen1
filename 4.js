
    document.addEventListener('DOMContentLoaded', () => {
        // --- API KEY & ADS ---
        const obfuscatedApiKey = 'QUl6YVN5QXpGclVkaVUwNEMwYlJVZ1MxMWhjLWVWMkIxWEtidk5N';
        const adLinks = ['https://s.shopee.co.id/4fkJj4u69U', 'https://s.shopee.co.id/4q3jvNtSoX', 'https://s.shopee.co.id/50NA7gspTa'];

        function openRandomAd(links) {
            if (!links || links.length === 0) return;
            const randomIndex = Math.floor(Math.random() * links.length);
            window.open(links[randomIndex], '_blank');
        }

        // --- DOM ELEMENTS ---
        const generateCvBtn = document.getElementById('generate-cv-btn');
        const addExperienceBtn = document.getElementById('add-experience');
        const addEducationBtn = document.getElementById('add-education');
        const experienceList = document.getElementById('experience-list');
        const educationList = document.getElementById('education-list');
        const cvOutput = document.getElementById('cv-output');
        const downloadBtnContainer = document.getElementById('download-btn-container');
        const downloadPdfBtn = document.getElementById('download-pdf-btn');
        const templateOptions = document.getElementById('template-options');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        let selectedTemplate = 'profesional';

        // --- EVENT LISTENERS ---
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        addExperienceBtn.addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.className = 'experience-item mb-4 p-3 border rounded relative';
            newItem.innerHTML = `
                <button class="absolute top-1 right-2 text-red-500 hover:text-red-700 remove-btn">&times;</button>
                <input type="text" placeholder="Posisi" class="w-full p-2 border rounded mb-2 experience-title">
                <input type="text" placeholder="Nama Perusahaan & Lokasi" class="w-full p-2 border rounded mb-2 experience-company">
                <input type="text" placeholder="Tanggal Mulai - Tanggal Selesai" class="w-full p-2 border rounded mb-2 experience-dates">
                <textarea placeholder="Deskripsi pekerjaan dan pencapaian..." class="w-full p-2 border rounded experience-desc" rows="3"></textarea>
            `;
            experienceList.appendChild(newItem);
        });

        addEducationBtn.addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.className = 'education-item mb-4 p-3 border rounded relative';
            newItem.innerHTML = `
                 <button class="absolute top-1 right-2 text-red-500 hover:text-red-700 remove-btn">&times;</button>
                <input type="text" placeholder="Nama Institusi/Sekolah" class="w-full p-2 border rounded mb-2 education-school">
                <input type="text" placeholder="Gelar/Jurusan" class="w-full p-2 border rounded mb-2 education-degree">
                <input type="text" placeholder="Tahun Lulus" class="w-full p-2 border rounded mb-2 education-year">
            `;
            educationList.appendChild(newItem);
        });

        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('remove-btn')) {
                e.target.parentElement.remove();
            }
        });
        
        templateOptions.addEventListener('click', (e) => {
            const card = e.target.closest('.template-card');
            if (!card) return;
            
            document.querySelectorAll('.template-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedTemplate = card.dataset.template;
        });

        generateCvBtn.addEventListener('click', generateCV);
        downloadPdfBtn.addEventListener('click', downloadPDF);

        async function generateCV() {
           // openRandomAd(adLinks);

            if (!document.getElementById('fullName').value) {
                Swal.fire('Input Tidak Lengkap', 'Nama Lengkap wajib diisi.', 'warning');
                return;
            }
            
            generateCvBtn.disabled = true;
            generateCvBtn.innerHTML = `<span class="loader"></span> Membuat...`;
            downloadBtnContainer.classList.add('hidden');
            
            const personalData = `Nama: ${document.getElementById('fullName').value}, Email: ${document.getElementById('email').value}, Telepon: ${document.getElementById('phone').value}, LinkedIn: ${document.getElementById('linkedin').value}, Ringkasan Profesional: ${document.getElementById('summary').value}`;
            let experienceData = Array.from(document.querySelectorAll('.experience-item')).map(item => {
                const title = item.querySelector('.experience-title').value;
                if (!title) return null;
                return `- Posisi: ${title}, Perusahaan: ${item.querySelector('.experience-company').value}, Periode: ${item.querySelector('.experience-dates').value}, Deskripsi: ${item.querySelector('.experience-desc').value}`;
            }).filter(Boolean).join('\n');
            let educationData = Array.from(document.querySelectorAll('.education-item')).map(item => {
                const school = item.querySelector('.education-school').value;
                 if (!school) return null;
                return `- Institusi: ${school}, Jurusan/Gelar: ${item.querySelector('.education-degree').value}, Tahun: ${item.querySelector('.education-year').value}`;
            }).filter(Boolean).join('\n');
            const skillsData = document.getElementById('skills').value;
            
            const prompt = `
            Tugas Anda adalah membuat Curriculum Vitae (CV) profesional dalam format HTML, menggunakan Tailwind CSS. Berdasarkan data pengguna di bawah, susun CV yang rapi, terstruktur, dan mudah dibaca.
            
            Gunakan gaya template: **${selectedTemplate}**.
            - **Profesional**: Tampilan klasik, bersih, dan formal. Gunakan font sans-serif seperti Arial. Judul seksi menggunakan \`border-b-2 pb-1 mb-3\`.
            - **Modern**: Tampilan minimalis dengan warna halus (misal, \`text-blue-800\` untuk judul). Mungkin menggunakan layout dua kolom.
            - **Kreatif**: Layout lebih berani, bisa menggunakan warna latar untuk header (misal, \`bg-teal-500 text-white\`).

            PERSYARATAN WAJIB:
            1.  Output HARUS berupa kode HTML lengkap untuk disisipkan ke dalam \`<div>\`. JANGAN sertakan tag \`<html>\`, \`<head>\`, atau \`<body>\`.
            2.  Bungkus seluruh CV dalam satu \`div\` utama dengan padding yang cukup, contoh: \`<div class="p-8 break-words">\`. Class \`break-words\` sangat penting.
            3.  Buat ringkasan profesional yang menarik dan persuasif.
            4.  Ubah deskripsi pengalaman kerja menjadi 3-4 poin pencapaian dalam bentuk \`<ul>\` dengan class \`list-disc list-inside\`.
            5.  Pastikan semua bagian (Kontak, Ringkasan, Pengalaman, Pendidikan, Keterampilan) memiliki judul yang jelas dan jarak yang cukup (misal, \`mb-6\`).
            
            Data Pengguna:
            Data Pribadi: ${personalData}
            Pengalaman Kerja: ${experienceData || 'Tidak ada'}
            Pendidikan: ${educationData || 'Tidak ada'}
            Keterampilan: ${skillsData || 'Tidak ada'}
            `;
            
            try {
                const decodedApiKey = atob(obfuscatedApiKey);
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${decodedApiKey}`;
                const payload = { contents: [{ parts: [{ text: prompt }] }] };

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();

                if (!response.ok) throw new Error(result.error?.message || 'Gagal menghasilkan CV.');
                if (!result.candidates || result.candidates.length === 0) throw new Error('AI tidak memberikan respons yang valid. Coba lagi.');

                const cvHtml = result.candidates[0].content.parts[0].text.replace(/```html|```/g, '').trim();

                cvOutput.innerHTML = cvHtml;
                downloadBtnContainer.classList.remove('hidden');
                Swal.fire({ icon: 'success', title: 'CV Berhasil Dibuat!' });

            } catch (error) {
                console.error("Error:", error);
                Swal.fire('Terjadi Kesalahan', `Gagal membuat CV: ${error.message}`, 'error');
            } finally {
                generateCvBtn.disabled = false;
                generateCvBtn.innerHTML = `<i class="fas fa-cogs mr-2"></i> Buat CV Sekarang`;
            }
        }

        function downloadPDF() {
           // openRandomAd(adLinks);
            const element = document.getElementById('cv-output');
            const fullName = document.getElementById('fullName').value || 'cv';
            const opt = {
              margin:       0.2,
              filename:     `${fullName.replace(/\s+/g, '_').toLowerCase()}_cv.pdf`,
              image:        { type: 'jpeg', quality: 1.0 },
              html2canvas:  { scale: 3, useCORS: true, logging: false },
              jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            Swal.fire({
                title: 'Mempersiapkan PDF...',
                text: 'Mohon tunggu sebentar.',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            html2pdf().set(opt).from(element).save().then(() => {
                 Swal.close();
            });
        }
    });
