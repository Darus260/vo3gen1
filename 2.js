document.addEventListener('DOMContentLoaded', () => {
            // --- API KEY & ADS ---
            const obfuscatedApiKey = 'QUl6YVN5QXpGclVkaVUwNEMwYlJVZ1MxMWhjLWVWMkIxWEtidk5N';
            const adLinks = [
                        'https://s.shopee.co.id/4fkJj4u69U',
            'https://s.shopee.co.id/4q3jvNtSoX',
            'https://s.shopee.co.id/50NA7gspTa',
            'https://s.shopee.co.id/5AgaJzsC8d',
            'https://s.shopee.co.id/2fzFLP1iDA',
            'https://s.shopee.co.id/2qIfXi14sD',
            'https://s.shopee.co.id/30c5k10RXG',
            'https://s.shopee.co.id/3AvVwJzoCJ',
            'https://s.shopee.co.id/3LEw8czArM',
            'https://s.shopee.co.id/3VYMKvyXWP',
            'https://s.shopee.co.id/3frmXExuBS',
            'https://s.shopee.co.id/3qBCjXxGqV',
            'https://s.shopee.co.id/1LTrkx6mv2',
            'https://s.shopee.co.id/1VnHxG69a5',
            'https://s.shopee.co.id/1g6i9Z5WF8',
            'https://s.shopee.co.id/1qQ8Ls4suB',
            'https://s.shopee.co.id/20jYYB4FZE',
            'https://s.shopee.co.id/2B2ykU3cEH',
            'https://s.shopee.co.id/2LMOwn2ytK',
            'https://s.shopee.co.id/2Vfp962LYN',
            'https://s.shopee.co.id/yUAVBrcu',
            'https://s.shopee.co.id/BHuMoBEHx',
            'https://s.shopee.co.id/LbKZ7Aax0',
            'https://s.shopee.co.id/VuklQ9xc3',
            'https://s.shopee.co.id/gEAxj9KH6',
            'https://s.shopee.co.id/qXbA28gw9',
            'https://s.shopee.co.id/10r1ML83bC',
            'https://s.shopee.co.id/1BARYe7QGF',
            'https://s.shopee.co.id/9KW9HecKgq',
            'https://s.shopee.co.id/9UpZTxbhLt',
            'https://s.shopee.co.id/9f8zgGb40w',
            'https://s.shopee.co.id/9pSPsZaQfz',
            'https://s.shopee.co.id/9zlq4sZnL2',
            'https://s.shopee.co.id/AA5GHBZA05',
            'https://s.shopee.co.id/AKOgTUYWf8',
            'https://s.shopee.co.id/AUi6fnXtKB',
            'https://s.shopee.co.id/800lhChPOi',
            'https://s.shopee.co.id/8AKBtVgm3l',
            'https://s.shopee.co.id/8Kdc5og8io',
            'https://s.shopee.co.id/8Ux2I7fVNr',
            'https://s.shopee.co.id/8fGSUQes2u',
            'https://s.shopee.co.id/8pZsgjeEhx',
            'https://s.shopee.co.id/8ztIt2dbN0',
            'https://s.shopee.co.id/9ACj5Lcy23',
            'https://s.shopee.co.id/6fVO6kmU6a',
            'https://s.shopee.co.id/6pooJ3lqld',
            'https://s.shopee.co.id/708EVMlDQg',
            'https://s.shopee.co.id/7ARehfka5j',
            'https://s.shopee.co.id/7Kl4tyjwkm',
            'https://s.shopee.co.id/7V4V6HjJPp',
            'https://s.shopee.co.id/7fNvIaig4s',
            'https://s.shopee.co.id/7phLUti2jv',
            'https://s.shopee.co.id/5L00WIrYoS',
            'https://s.shopee.co.id/5VJQibqvTV',
            'https://s.shopee.co.id/5fcquuqI8Y',
            'https://s.shopee.co.id/5pwH7Dpenb',
            'https://s.shopee.co.id/60FhJWp1Se',
            'https://s.shopee.co.id/6AZ7VpoO7h',
            'https://s.shopee.co.id/6KsXi8nkmk',
            'https://s.shopee.co.id/6VBxuRn7Rn',
            'https://s.shopee.co.id/4Ao389w0BM',
            'https://s.shopee.co.id/40UcvqwdWL',
            'https://s.shopee.co.id/4VQtWlujVS',
            'https://s.shopee.co.id/4L7TKSvMqR',
            'https://s.shopee.co.id/4q3jvNtSpY',
            'https://s.shopee.co.id/4fkJj4u6AX',
            'https://s.shopee.co.id/5AgaJzsC9e',
            'https://s.shopee.co.id/50NA7gspUd',
            'https://s.shopee.co.id/2qIfXi14tE',
            'https://s.shopee.co.id/2fzFLP1iED',
            'https://s.shopee.co.id/3AvVwJzoDK',
            'https://s.shopee.co.id/30c5k10RYJ',
            'https://s.shopee.co.id/3VYMKvyXXQ',
            'https://s.shopee.co.id/3LEw8czAsP',
            'https://s.shopee.co.id/3qBCjXxGrW',
            'https://s.shopee.co.id/3frmXExuCV',
            'https://s.shopee.co.id/1VnHxG69b6',
            'https://s.shopee.co.id/1LTrkx6mw5',
            'https://s.shopee.co.id/1qQ8Ls4svC',
            'https://s.shopee.co.id/1g6i9Z5WGB',
            'https://s.shopee.co.id/2B2ykU3cFI',
            'https://s.shopee.co.id/20jYYB4FaH',
            'https://s.shopee.co.id/2Vfp962LZO',
            'https://s.shopee.co.id/2LMOwn2yuN',
            'https://s.shopee.co.id/BHuMoBEIy',
            'https://s.shopee.co.id/yUAVBrdx',
            'https://s.shopee.co.id/VuklQ9xd4',
            'https://s.shopee.co.id/LbKZ7Aay3',
            'https://s.shopee.co.id/qXbA28gxA',
            'https://s.shopee.co.id/gEAxj9KI9',
            'https://s.shopee.co.id/1BARYe7QHG',
            'https://s.shopee.co.id/10r1ML83cF',
            'https://s.shopee.co.id/9UpZTxbhMu',
            'https://s.shopee.co.id/9KW9HecKht',
            'https://s.shopee.co.id/9pSPsZaQh0',
            'https://s.shopee.co.id/9f8zgGb41z',
            'https://s.shopee.co.id/AA5GHBZA16',
            'https://s.shopee.co.id/9zlq4sZnM5',
            'https://s.shopee.co.id/AUi6fnXtLC',
            'https://s.shopee.co.id/AKOgTUYWgB',
            'https://s.shopee.co.id/9f8zp4J261',
            'https://s.shopee.co.id/9UpZclJfR0',
            'https://s.shopee.co.id/9KW9QSKIlz',
            'https://s.shopee.co.id/9ACjE9Kw6y',
            'https://s.shopee.co.id/8ztJ1qLZRx',
            'https://s.shopee.co.id/8pZspXMCmw',
            'https://s.shopee.co.id/8fGSdEMq7v',
            'https://s.shopee.co.id/8Ux2QvNTSu',
            'https://s.shopee.co.id/8KdcEcO6nt',
            'https://s.shopee.co.id/8AKC2JOk8s',
            'https://s.shopee.co.id/800lq0PNTr',
            'https://s.shopee.co.id/7phLdhQ0oq',
            'https://s.shopee.co.id/7fNvROQe9p',
            'https://s.shopee.co.id/7V4VF5RHUo',
            'https://s.shopee.co.id/7Kl52mRupn',
            'https://s.shopee.co.id/7AReqTSYAm',
            'https://s.shopee.co.id/708EeATBVl',
            'https://s.shopee.co.id/6pooRrToqk',
            'https://s.shopee.co.id/6fVOFYUSBj',
            'https://s.shopee.co.id/6VBy3FV5Wi',
            'https://s.shopee.co.id/6KsXqwVirh',
            'https://s.shopee.co.id/6AZ7edWMCg',
            'https://s.shopee.co.id/60FhSKWzXf',
            'https://s.shopee.co.id/5pwHG1Xcse',
            'https://s.shopee.co.id/5fcr3iYGDd',
            'https://s.shopee.co.id/5VJQrPYtYc',
            'https://s.shopee.co.id/5L00f6ZWtb',
            'https://s.shopee.co.id/5AgaSnaAEa',
            'https://s.shopee.co.id/50NAGUanZZ',
            'https://s.shopee.co.id/4q3k4BbQuY',
            'https://s.shopee.co.id/4fkJrsc4FX',
            'https://s.shopee.co.id/4VQtfZchaW',
            'https://s.shopee.co.id/4L7TTGdKvV',
            'https://s.shopee.co.id/4Ao3GxdyGU',
            'https://s.shopee.co.id/40Ud4eebbT',
            'https://s.shopee.co.id/3qBCsLfEwS',
            'https://s.shopee.co.id/3frmg2fsHR',
            'https://s.shopee.co.id/3VYMTjgVcQ',
            'https://s.shopee.co.id/3LEwHQh8xP',
            'https://s.shopee.co.id/3AvW57hmIO',
            'https://s.shopee.co.id/30c5soiPdN',
            'https://s.shopee.co.id/2qIfgVj2yM',
            'https://s.shopee.co.id/2fzFUCjgJL',
            'https://s.shopee.co.id/2VfpHtkJeK',
            'https://s.shopee.co.id/2LMP5akwzJ',
            'https://s.shopee.co.id/2B2ytHlaKI',
            'https://s.shopee.co.id/20jYgymDfH',
            'https://s.shopee.co.id/1qQ8Ufmr0G',
            'https://s.shopee.co.id/1g6iIMnULF',
            'https://s.shopee.co.id/1VnI63o7gE',
            'https://s.shopee.co.id/1LTrtkol1D',
            'https://s.shopee.co.id/1BARhRpOMC',
            'https://s.shopee.co.id/10r1V8q1hB',
            'https://s.shopee.co.id/qXbIpqf2A',
            'https://s.shopee.co.id/gEB6WrIN9',
            'https://s.shopee.co.id/VukuDrvi8',
            'https://s.shopee.co.id/LbKhusZ37',
            'https://s.shopee.co.id/BHuVbtCO6',
            'https://s.shopee.co.id/yUJItpj5',
            'https://s.shopee.co.id/AKOgcIGUl6',
            'https://s.shopee.co.id/AUi6obFrQ9',
            'https://s.shopee.co.id/9zlqDgHlR4',
            'https://s.shopee.co.id/AA5GPzH867',
            'https://s.shopee.co.id/9f8zp4J272',
            'https://s.shopee.co.id/9pSQ1NIOm5',
            'https://s.shopee.co.id/9KW9QSKIn0',
            'https://s.shopee.co.id/9UpZclJfS3',
            'https://s.shopee.co.id/8ztJ1qLZSy',
            'https://s.shopee.co.id/9ACjE9Kw81',
            'https://s.shopee.co.id/8fGSdEMq8w',
            'https://s.shopee.co.id/8pZspXMCnz',
            'https://s.shopee.co.id/8KdcEcO6ou',
            'https://s.shopee.co.id/8Ux2QvNTTx',
            'https://s.shopee.co.id/800lq0PNUs',
            'https://s.shopee.co.id/8AKC2JOk9v',
            'https://s.shopee.co.id/7fNvROQeAq',
            'https://s.shopee.co.id/7phLdhQ0pt',
            'https://s.shopee.co.id/7Kl52mRuqo',
            'https://s.shopee.co.id/7V4VF5RHVr',
            'https://s.shopee.co.id/708EeATBWm',
            'https://s.shopee.co.id/7AReqTSYBp',
            'https://s.shopee.co.id/6fVOFYUSCk',
            'https://s.shopee.co.id/6pooRrTorn',
            'https://s.shopee.co.id/6KsXqwVisi',
            'https://s.shopee.co.id/6VBy3FV5Xl',
            'https://s.shopee.co.id/60FhSKWzYg',
            'https://s.shopee.co.id/6AZ7edWMDj',
            'https://s.shopee.co.id/5fcr3iYGEe',
            'https://s.shopee.co.id/5pwHG1Xcth',
            'https://s.shopee.co.id/5L00f6ZWuc',
            'https://s.shopee.co.id/5VJQrPYtZf',
            'https://s.shopee.co.id/50NAGUanaa',
            'https://s.shopee.co.id/5AgaSnaAFd',
            'https://s.shopee.co.id/4fkJrsc4GY',
            'https://s.shopee.co.id/4q3k4BbQvb',
            'https://s.shopee.co.id/4L7TTGdKwW',
            'https://s.shopee.co.id/4VQtfZchbZ',
            'https://s.shopee.co.id/40Ud4eebcU',
            'https://s.shopee.co.id/4Ao3GxdyHX',
            'https://s.shopee.co.id/3frmg2fsIS',
            'https://s.shopee.co.id/4fkJxolON6',
            'https://s.shopee.co.id/4q3kA7kl29',
            'https://s.shopee.co.id/50NAMQk7hC',
            'https://s.shopee.co.id/5AgaYjjUMF',
            'https://s.shopee.co.id/40UdAanvj2',
            'https://s.shopee.co.id/4Ao3MtnIO5',
            'https://s.shopee.co.id/4L7TZCmf38',
            'https://s.shopee.co.id/4VQtlVm1iB',
            'https://s.shopee.co.id/3LEwNMqT4y',
            'https://s.shopee.co.id/3VYMZfppk1',
            'https://s.shopee.co.id/3frmlypCP4',
            'https://s.shopee.co.id/3qBCyHoZ47',
            'https://s.shopee.co.id/2fzFa8t0Qu',
            'https://s.shopee.co.id/2qIfmRsN5x',
            'https://s.shopee.co.id/30c5ykrjl0',
            'https://s.shopee.co.id/3AvWB3r6Q3',
            'https://s.shopee.co.id/20jYmuvXmq',
            'https://s.shopee.co.id/2B2yzDuuRt',
            'https://s.shopee.co.id/2LMPBWuH6w',
            'https://s.shopee.co.id/2VfpNptdlz',
            'https://s.shopee.co.id/1LTrzgy58m',
            'https://s.shopee.co.id/1VnIBzxRnp',
            'https://s.shopee.co.id/1g6iOIwoSs',
            'https://s.shopee.co.id/1qQ8abwB7v',
            'https://s.shopee.co.id/gEBCT0cUi',
            'https://s.shopee.co.id/qXbOlzz9l',
            'https://s.shopee.co.id/10r1b4zLoo',
            'https://s.shopee.co.id/1BARnNyiTr',
            'https://s.shopee.co.id/yUPF39qe',
            'https://s.shopee.co.id/BHubY2WVh',
            'https://s.shopee.co.id/LbKnr1tAk',
            'https://s.shopee.co.id/Vul0A1Fpn',
            'https://s.shopee.co.id/9zlqJcR5Ye',
            'https://s.shopee.co.id/AA5GVvQSDh',
            'https://s.shopee.co.id/AKOgiEPosk',
            'https://s.shopee.co.id/AUi6uXPBXn',
            'https://s.shopee.co.id/9KW9WOTcua',
            'https://s.shopee.co.id/9UpZihSzZd',
            'https://s.shopee.co.id/9f8zv0SMEg',
            'https://s.shopee.co.id/9pSQ7JRitj',
            'https://s.shopee.co.id/8fGSjAWAGW',
            'https://s.shopee.co.id/8pZsvTVWvZ',
            'https://s.shopee.co.id/8ztJ7mUtac',
            'https://s.shopee.co.id/9ACjK5UGFf',
            'https://s.shopee.co.id/800lvwYhcS',
            'https://s.shopee.co.id/8AKC8FY4HV',
            'https://s.shopee.co.id/8KdcKYXQwY',
            'https://s.shopee.co.id/8Ux2WrWnbb',
            'https://s.shopee.co.id/7Kl58ibEyO',
            'https://s.shopee.co.id/7V4VL1abdR',
            'https://s.shopee.co.id/7fNvXKZyIU',
            'https://s.shopee.co.id/7phLjdZKxX',
            'https://s.shopee.co.id/6fVOLUdmKK',
            'https://s.shopee.co.id/6pooXnd8zN',
            'https://s.shopee.co.id/708Ek6cVeQ',
            'https://s.shopee.co.id/7ARewPbsJT',
            'https://s.shopee.co.id/60FhYGgJgG',
            'https://s.shopee.co.id/6AZ7kZfgLJ',
            'https://s.shopee.co.id/6KsXwsf30M',
            'https://s.shopee.co.id/6VBy9BePfP',
            'https://s.shopee.co.id/5L00l2ir2C',
            'https://s.shopee.co.id/5VJQxLiDhF',
            'https://s.shopee.co.id/5fcr9ehaMI',
            'https://s.shopee.co.id/5pwHLxgx1L',
            'https://s.shopee.co.id/4q3kA7kl3A',
            'https://s.shopee.co.id/4fkJxolOO9',
            'https://s.shopee.co.id/5AgaYjjUNG',
            'https://s.shopee.co.id/50NAMQk7iF',
            'https://s.shopee.co.id/4Ao3MtnIP6',
            'https://s.shopee.co.id/40UdAanvk5',
            'https://s.shopee.co.id/4VQtlVm1jC',
            'https://s.shopee.co.id/4L7TZCmf4B',
            'https://s.shopee.co.id/3VYMZfppl2',
            'https://s.shopee.co.id/3LEwNMqT61',
            'https://s.shopee.co.id/3qBCyHoZ58',
            'https://s.shopee.co.id/3frmlypCQ7',
            'https://s.shopee.co.id/2qIfmRsN6y',
            'https://s.shopee.co.id/2fzFa8t0Rx',
            'https://s.shopee.co.id/3AvWB3r6R4',
            'https://s.shopee.co.id/30c5ykrjm3',
            'https://s.shopee.co.id/2B2yzDuuSu',
            'https://s.shopee.co.id/20jYmuvXnt',
            'https://s.shopee.co.id/2VfpNptdn0',
            'https://s.shopee.co.id/2LMPBWuH7z',
            'https://s.shopee.co.id/1VnIBzxRoq',
            'https://s.shopee.co.id/1LTrzgy59p',
            'https://s.shopee.co.id/1qQ8abwB8w',
            'https://s.shopee.co.id/1g6iOIwoTv',
            'https://s.shopee.co.id/qXbOlzzAm',
            'https://s.shopee.co.id/gEBCT0cVl',
            'https://s.shopee.co.id/1BARnNyiUs',
            'https://s.shopee.co.id/10r1b4zLpr',
            'https://s.shopee.co.id/BHubY2WWi',
            'https://s.shopee.co.id/yUPF39rh',
            'https://s.shopee.co.id/Vul0A1Fqo',
            'https://s.shopee.co.id/LbKnr1tBn',
            'https://s.shopee.co.id/AA5GVvQSEi',
            'https://s.shopee.co.id/9zlqJcR5Zh',
            'https://s.shopee.co.id/AUi6uXPBYo',
            'https://s.shopee.co.id/AKOgiEPotn',
            ];

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
                
                openRandomAd(adLinks);
                
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
