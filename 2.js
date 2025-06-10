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
            const uploadButton = document.getElementById('upload-button');
            const imageUpload = document.getElementById('image-upload');
            const imagePreviewContainer = document.getElementById('image-preview-container');
            const imagePreview = document.getElementById('image-preview');
            const uploadIcon = document.getElementById('upload-icon');
            const uploadText = document.getElementById('upload-text');
            const generateButtonContainer = document.getElementById('generate-button-container');
            const generateBtn = document.getElementById('generate-btn');
            const resultContainer = document.getElementById('prompt-result-container');
            const promptOutput = document.getElementById('prompt-output');
            const copyBtn = document.getElementById('copy-prompt-btn');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            let imageData = null;

            // --- EVENT LISTENERS ---
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            uploadButton.addEventListener('click', () => imageUpload.click());
            imageUpload.addEventListener('change', handleImageUpload);
            generateBtn.addEventListener('click', generatePrompt);
            copyBtn.addEventListener('click', () => copyToClipboard(promptOutput.innerText, 'Prompt'));

            function handleImageUpload(e) {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        imageData = reader.result; // base64
                        imagePreview.src = imageData;
                        imagePreviewContainer.classList.remove('hidden');
                        generateButtonContainer.classList.remove('hidden');
                        uploadIcon.classList.add('hidden');
                        uploadText.classList.add('hidden');
                        resultContainer.classList.add('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            }

            async function generatePrompt() {
                if (!imageData) {
                    Swal.fire('Tidak Ada Gambar', 'Silakan pilih gambar terlebih dahulu.', 'warning');
                    return;
                }
                
                //openRandomAd(adLinks);
                
                Swal.fire({
                    title: 'Sedang Menganalisis Gambar...',
                    html: 'Mohon tunggu, AI sedang mempelajari detail gambar Anda.',
                    allowOutsideClick: false,
                    didOpen: () => { Swal.showLoading(); }
                });

                const analysisPrompt = "Analyze this image in extreme detail. Describe every single visual element, including the main subject(s), their appearance (clothing, expression), the background, the environment, any objects present, the lighting style (e.g., soft, harsh, golden hour), the color palette, textures, and the overall mood or atmosphere of the image. Your description should be comprehensive enough for an AI image generator to recreate the scene accurately.";
                
                try {
                    const decodedApiKey = atob(obfuscatedApiKey);
                    const analyzeUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${decodedApiKey}`;
                    
                    const base64Data = imageData.split(',')[1];
                    const mimeType = imageData.split(';')[0].split(':')[1];

                    const analyzePayload = {
                        contents: [{ role: "user", parts: [{ text: analysisPrompt }, { inlineData: { mimeType, data: base64Data } }] }]
                    };

                    const response = await fetch(analyzeUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(analyzePayload)
                    });

                    if (!response.ok) {
                        const errorResult = await response.json();
                        throw new Error(errorResult.error.message || 'Gagal menganalisis gambar.');
                    }

                    const result = await response.json();
                    
                    if (!result.candidates || result.candidates.length === 0) {
                        throw new Error('Analisis gambar tidak menghasilkan deskripsi. Coba gambar lain.');
                    }

                    const promptText = result.candidates[0].content.parts[0].text;
                    promptOutput.innerText = promptText;
                    resultContainer.classList.remove('hidden');
                    Swal.close();
                
                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire('Terjadi Kesalahan', error.message, 'error');
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
