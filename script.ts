document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume') as HTMLElement;
    const shareUrl = document.getElementById('share-url') as HTMLParagraphElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = (document.getElementById('username') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const work = (document.getElementById('work') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        (document.getElementById('resume-name') as HTMLParagraphElement).innerText = name;
        (document.getElementById('resume-email') as HTMLParagraphElement).innerText = email;
        (document.getElementById('resume-education') as HTMLParagraphElement).innerText = education;
        (document.getElementById('resume-work') as HTMLParagraphElement).innerText = work;
        (document.getElementById('resume-skills') as HTMLParagraphElement).innerText = skills;

        resumeSection.style.display = 'block';

        const resumeURL = `${window.location.origin}/resumes/${username}.pdf`;
        shareUrl.innerHTML = `Shareable link: <a href="${resumeURL}" target="_blank">${resumeURL}</a>`;
    });

    document.getElementById('download-pdf')?.addEventListener('click', () => {
        // Implement PDF download functionality here
        alert('PDF download functionality is not implemented yet.');
    });

    document.getElementById('share-link')?.addEventListener('click', () => {
        const url = shareUrl.querySelector('a')?.href;
        if (url) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy link: ', err);
            });
        }
    });
});
