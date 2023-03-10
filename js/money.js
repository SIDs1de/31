document.addEventListener('DOMContentLoaded', () => {
  this.pay1 = function () {
    var widget = new cp.CloudPayments();
    widget.pay('auth', // или 'charge'
      { //options
        publicId: 'test_api_00000000000000000000002', //id из личного кабинета
        description: 'Оплата товаров в example.com', //назначение
        amount: 100, //сумма
        currency: 'RUB', //валюта
        invoiceId: '1234567', //номер заказа  (необязательно)
        skin: "modern", //дизайн виджета (необязательно)  
        autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
        requireEmail: true,
      },
      {
        onSuccess: function (options) { // success
          //действие при успешной оплате
        },
        onFail: function (reason, options) { // fail
          //действие при неуспешной оплате
        },
        onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
        }
      }
    )
  };

  $('.method:nth-child(1)').click(pay1);

  this.pay2 = function () {
    var payment = new UnitPay();
    payment.createWidget({
      publicKey: "PUBLIC KEY",
      sum: 1,
      account: "demo",
      domainName: "unitpay.ru",
      signature: "2c38bb3114b2f02222ee35f6b60c6bbe628ad31bed59633787204ae59659a02e",
      desc: "Описание платежа",
      locale: "ru",
      cashItems: [{ "name": "Shaurma", "count": 1, "price": 100, "type": "commodity" }],
      // customerEmail: email
    });
    payment.success(function (params) {
      //действие при успешной оплате
    });
    payment.error(function (message, params) {
      //действие при неуспешной оплате
    });
    return false;
  };

  $('.method:nth-child(2)').click(pay2);
})