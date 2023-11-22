function Validator (options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Hàm Validate tối ưu
        function Validate (inputElement, rule) {
            // Validate
            var errorMessage;
            // value của Object selectorRules
            // là 1 Array chứa các hàm Validate của cùng 1 trường
            var testsRule = selectorRules[rule.selector];
            for (var i = 0; i < testsRule.length; i++) {
                errorMessage = testsRule[i](inputElement.value);
                if (!!errorMessage === true) break;
                // Có thông báo lỗi hàm Validate sẽ trả về String convert sang boolean là true
            }
            // Tối ưu Validate
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            if (!!errorMessage === true) {
                errorElement.innerText = errorMessage;
                errorElement.parentElement.classList.add('Invalid');
            } else {
                errorElement.innerText = errorMessage;
                errorElement.parentElement.classList.remove('Invalid');
            }
            return !errorMessage;
            // errorMessage k có value sẽ trả về thông báo lỗi là 1 String convert sang boolean là true
            // !errorMessage lúc này sẽ trả về false
            // errorMessage khi có value trả về chuỗi rỗng '' convert sáng boolean là false
            // !errorMessage lúc này trả về true
        };
        // Xóa class Invalid và errorMessage khi người dùng nhập vào 
        function removeError (inputElement) {
            // var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            errorElement.innerText = '';
            errorElement.parentElement.classList.remove('Invalid');
        };
        // Object có các value là Array chứa các hàm Validate đc lấy ra từ rule
        var selectorRules = {}; 
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            // Đưa các rule vào trong Object sectorRules
            // Lặp và đưa các hàm Validate của cùng 1 trường vào 1 Array
            if (!Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector] = [rule.test];
            } else {
                selectorRules[rule.selector].push(rule.test);
            }
                      
            // Validate inputElement qua sự kiện
            if (inputElement) {
                inputElement.onblur = function () {
                    Validate(inputElement, rule);
                };
                // oninput: event khi người dùng nhập vào
                inputElement.oninput = function () {
                    removeError(inputElement);
                };
            };     
        });
        /**Submit */
        var submitElement = document.querySelector(options.submitSelector);
        submitElement.onclick = function () {
            var checkFormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);
                if (isValid === false) {
                    checkFormValid = false;
                }
            });
            if (checkFormValid === true) {
                var inputElements = formElement.querySelectorAll(options.selectorInputs);
                var valueInputs = Array.from(inputElements).reduce(function (Values, input) {
                    Values[input.name] = input.value;
                    return Values;
                }, {});
                options.onSubmit(valueInputs);
                if (options.isLogin === false) {
                    alert('Bạn đã đăng ký thành công');
                } else {
                    var modalLoginElement = document.querySelector('.modal-login');
                    modalLoginElement.style.display = 'none';
                    var loginElement = document.querySelector('.header-navbar__Login');
                    loginElement.classList.remove('header-navbar__Not-loggedin');
                    loginElement.classList.add('header-navbar__Loggedin');
                    var listNotifyElement = document.querySelector('.header-Notify');
                    listNotifyElement.classList.remove('header-no-Notify');
                    listNotifyElement.classList.add('header-has-Notify');
                    var listCartElement = document.querySelector('.header-cart');
                    listCartElement.classList.remove('header-cart--no-product');
                    listCartElement.classList.add('header-cart--has-product');
                    alert('Bạn đã đăng nhập thành công');
                };
                // var modalLoginElement = document.querySelector('.modal-login');
                // modalLoginElement.style.display = 'none';
            };
        }; 
    };
};  


Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? '' : message;
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return regex.test(value) ? '' : message;
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? '' : `Mật khẩu tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isMatching = function (selector, getValuePassword, message) {
    return {
        selector: selector,
        test: function (value) {    
            return value === getValuePassword() ? '' : message;
        }
    }
}