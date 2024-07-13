// page-1
document.addEventListener('DOMContentLoaded', function () {
    var currentPage = 1;
    var totalPages = document.querySelectorAll('.page-content').length;

    function showPage(pageNumber) {
        document.querySelectorAll('.page-content').forEach(function (page) {
            page.classList.add('hidden');
        });
        document.querySelector('.page-' + pageNumber).classList.remove('hidden');
        document.querySelectorAll('.pagination a').forEach(function (pageLink) {
            pageLink.classList.remove('active');
        });
        document.querySelector('.pagination a:nth-child(' + (pageNumber + 1) + ')').classList.add('active');
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    }

    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    }

    window.showPage = function (pageNumber) {
        currentPage = pageNumber;
        showPage(currentPage);
    };
    window.prevPage = prevPage;
    window.nextPage = nextPage;

    showPage(currentPage);
});

// page-2
document.addEventListener('DOMContentLoaded', function () {
    var currentPage = 1;
    var totalPages = document.querySelectorAll('.page-content-2').length;

    function showPage2(pageNumber) {
        document.querySelectorAll('.page-content-2').forEach(function (page) {
            page.classList.add('hidden-2');
        });
        document.querySelector('.page2-' + pageNumber).classList.remove('hidden-2');
        document.querySelectorAll('.pagination-1 a').forEach(function (pageLink) {
            pageLink.classList.remove('active-1');
        });
        document.querySelector('.pagination-1 a:nth-child(' + (pageNumber + 1) + ')').classList.add('active-1');
    }

    function prevPage2() {
        if (currentPage > 1) {
            currentPage--;
            showPage2(currentPage);
        }
    }

    function nextPage2() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage2(currentPage);
        }
    }

    window.showPage2 = function (pageNumber) {
        currentPage = pageNumber;
        showPage2(currentPage);
    };
    window.prevPage2 = prevPage2;
    window.nextPage2 = nextPage2;

    showPage2(currentPage);
});
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

//transition
document.addEventListener("DOMContentLoaded", function () {
    function scrollToSection(id) {
        var element = document.getElementById(id);
        if (element) {
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition - (window.innerHeight / 3) + (element.offsetHeight / 4);
            window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
        }
    }

    // scroll to "InCountry" section
    document.getElementById("scrollToInCountry").addEventListener("click", function () {
        scrollToSection("InCountry");
    });

    //scroll to "OutCountry" section
    document.getElementById("scrollToOutCountry").addEventListener("click", function () {
        scrollToSection("OutCountry");
    });

    //  scroll to "KhachSan" section
    document.getElementById("scrollToKhachSan").addEventListener("click", function () {
        scrollToSection("KhachSan");
    });
    document.getElementById("scrollToLienHe").addEventListener("click", function () {
        scrollToSection("LienHe");
    });
});