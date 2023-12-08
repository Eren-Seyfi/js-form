//content.js bu dosya

// İçerik yüklendiğinde çalışacak işlev
window.addEventListener("load", function () {
  const allFormData = []; // Tüm form verilerini saklamak için boş bir dizi oluştur

  // Tüm form etiketlerini seçme
  const forms = document.getElementsByTagName("form"); // veya document.querySelectorAll('form');

  // Her form için olay dinleyicisi eklemek
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Formun varsayılan gönderme davranışını engellemek için

      // Formdaki verileri almak için FormData nesnesini kullanma
      const formData = new FormData(form);

      // FormData içindeki verileri döngü ile alabilir veya istediğiniz işlemi yapabilirsiniz
      const formValues = {};
      for (let pair of formData.entries()) {
        formValues[pair[0]] = pair[1];
      }

      // Elde edilen verileri ana diziye eklemek
      allFormData.push(formValues);

      // Tüm form verilerini konsola yazdırma
      // Tüm form verilerini konsola yazdırma
      console.log(allFormData);
      //   alert(JSON.stringify(allFormData)); // JSON.stringify kullanarak diziyi metin olarak göstermek
    });
  });
});
