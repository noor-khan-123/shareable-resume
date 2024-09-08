document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume');
    var shareUrl = document.getElementById('share-url');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var work = document.getElementById('work').value;
        var skills = document.getElementById('skills').value;
        document.getElementById('resume-name').innerText = name;
        document.getElementById('resume-email').innerText = email;
        document.getElementById('resume-education').innerText = education;
        document.getElementById('resume-work').innerText = work;
        document.getElementById('resume-skills').innerText = skills;
        resumeSection.style.display = 'block';
        var resumeURL = "".concat(window.location.origin, "/resumes/").concat(username, ".pdf");
        shareUrl.innerHTML = "Shareable link: <a href=\"".concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a>");
    });
    (_a = document.getElementById('download-pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        // Implement PDF download functionality here
        alert('PDF download functionality is not implemented yet.');
    });
    (_b = document.getElementById('share-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var _a;
        var url = (_a = shareUrl.querySelector('a')) === null || _a === void 0 ? void 0 : _a.href;
        if (url) {
            navigator.clipboard.writeText(url).then(function () {
                alert('Link copied to clipboard!');
            }).catch(function (err) {
                console.error('Failed to copy link: ', err);
            });
        }
    });
});
