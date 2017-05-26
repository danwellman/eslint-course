
  window.testMethod = function () {
    const something = 'something';

    for (var x = 10; x > 0; x--) {
      if (x > 5 && !document.body.classList.contains('danger')) document.body.classList.add('danger');
    }
  };

