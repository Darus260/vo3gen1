
        document.addEventListener('DOMContentLoaded', () => {
            // --- API KEY (OBFUSCATED) & AD LINKS ---
            const obfuscatedApiKey = 'QUl6YVN5QXpGclVkaVUwNEMwYlJVZ1MxMWhjLWVWMkIxWEtidk5N';
            const adLinks = ['https://s.shopee.co.id/4fkJj4u69U', 'https://s.shopee.co.id/4q3jvNtSoX', 'https://s.shopee.co.id/50NA7gspTa'];

            function openRandomAd(links) {
                if (!links || links.length === 0) return;
                const randomIndex = Math.floor(Math.random() * links.length);
                window.open(links[randomIndex], '_blank');
            }

            // --- DOM ELEMENTS ---
            const generateBtn = document.getElementById('generate-story-btn');
            const resultContainer = document.getElementById('story-result-container');
            const storyOutput = document.getElementById('story-output');
            const copyBtn = document.getElementById('copy-story-btn');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            // --- EVENT LISTENERS ---
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            generateBtn.addEventListener('click', generateStory);
            copyBtn.addEventListener('click', () => copyToClipboard(storyOutput.innerText, 'Cerita'));

            async function generateStory() {
                //openRandomAd(adLinks); // Tampilkan iklan saat tombol diklik

                const genre = document.getElementById('genre').value;
                const character = document.getElementById('character').value;
                const setting = document.getElementById('setting').value;
                const plot = document.getElementById('plot').value;

                if (!character || !setting || !plot) {
                    Swal.fire('Input Tidak Lengkap', 'Harap isi semua kolom untuk menghasilkan cerita.', 'warning');
                    return;
                }
                
                // Tampilkan loading
                Swal.fire({
                    title: 'Sedang Membuat Cerita...',
                    html: 'Mohon tunggu sejenak, AI sedang merangkai kata.',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                const prompt = `Tulis sebuah cerita pendek yang menarik dalam Bahasa Indonesia dengan genre ${genre}. 
                Tokoh utamanya adalah: ${character}.
                Latar tempatnya adalah: ${setting}.
                Ide pokok ceritanya adalah: ${plot}.
                Buatlah cerita dengan narasi yang kaya, dialog yang hidup, dan akhir yang memuaskan.`;
                
                try {
                    const decodedApiKey = atob(obfuscatedApiKey);
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${decodedApiKey}`;

                    const payload = {
                        contents: [{ parts: [{ text: prompt }] }]
                    };

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        const errorResult = await response.json();
                        throw new Error(`API Error: ${errorResult.error.message}`);
                    }

                    const result = await response.json();
                    const storyText = result.candidates[0].content.parts[0].text;

                    storyOutput.innerText = storyText;
                    resultContainer.classList.remove('hidden');
                    Swal.close();

                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire('Terjadi Kesalahan', `Gagal menghasilkan cerita: ${error.message}`, 'error');
                }
            }
            
            function copyToClipboard(textToCopy, type) {
                openRandomAd(adLinks);
                navigator.clipboard.writeText(textToCopy).then(() => {
                    Swal.fire({
                      toast: true,
                      position: 'top-end',
                      icon: 'success',
                      title: `${type} berhasil disalin!`,
                      showConfirmButton: false,
                      timer: 2000,
                      timerProgressBar: true,
                    });
                }).catch(err => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: `Gagal menyalin ${type}.`,
                    });
                });
            }
        });
