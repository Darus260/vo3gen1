
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
            openRandomAd(adLinks);

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
