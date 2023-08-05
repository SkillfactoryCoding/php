const game = {
    run : false,
    modals : {
        first: null,
        finish: null,
    },

    initedEvents: false,

    values : {
        minValue: 0,
        maxValue: 100,
        answerNumber: 0,
        orderNumber: 0,
    },

    ids: {
        modalFirst : '#modalFirst',
        modalFinish : '#modalFinish',
        buttons : '.buttons-area',
        answerField : '#answerField',
        orderNumberField : '#orderNumberField',
        gameContainer : '#gameContainer',
        btnLess : '#btnLess',
        btnEqual : '#btnEqual',
        btnOver : '#btnOver',
        btnRetry: '#btnRetry'
    },

    elements : {
        modalFirst : null,
        modalFinish : null,
        buttons : null,
        answerField : null,
        orderNumberField : null,
        gameContainer : null,
        btnLess : null,
        btnEqual : null,
        btnOver : null,
        btnRetry : null
    },

    errorPhrase : [
        `Вы загадали неправильное число!\n\u{1F914}`,
        `Я сдаюсь..\n\u{1F92F}`,
        `"Press F to pay respects"\n\u{1F44D}`,
        `Моё уважение\n\u{1F4A9}`,
    ],
    successPhrase : [
        `Я всегда угадываю\n\u{1F60E}`,
        `Это было легко\n\u{1F92F}`,
        `Изи\n\u{1F9D0}`,
        `Может что-то посложнее?\n\u{1F644}`,
    ],

    answerPhrase : [
        `Вы загадали число {{answerNumber}}?`,
        `Это же число {{answerNumber}}?`,
        `Да это легко! Ты загадал {{answerNumber}}?`,
        `Пффф, это {{answerNumber}}?`,
    ],

    init: function () {
        this.initValues();
        this.initElements();
        this.initModal();
        this.initEvents();

        this.start();
    },

    initValues: function () {
        this.values.minValue = 0;
        this.values.maxValue = 100;
        this.values.answerNumber = 0;
        this.values.orderNumber = 0;
    },

    initEvents: function ()
    {
        if (this.initedEvents === false) {
            this.elements.modalFirst.querySelector('#nextModalSecond').addEventListener('click', () => {
                let minValue = this.elements.modalFirst.querySelector('#minValue').value;
                let maxValue = this.elements.modalFirst.querySelector('#maxValue').value;

                this.values.minValue = this.parseMinValue(minValue);
                this.values.maxValue = this.parseMaxValue(maxValue);

                this.modals.first.hide();

                this.elements.modalFinish.querySelector('h1').textContent = 'Почти готово...';
                this.elements.modalFinish.querySelector('.modal-body').textContent = this.getModalSecondContent();
                this.modals.finish.show();
            });

            this.elements.modalFinish.querySelector('#startGame').addEventListener('click', () => {
                this.modals.finish.hide();
                this.initPlay();
            });

            this.elements.btnEqual.addEventListener('click', () => {
                if (this.run){
                    this.elements.answerField.innerText = this.getSuccessPhrase();
                    this.end();
                }
            })

            this.elements.btnOver.addEventListener('click', () => {
                if (this.run)
                {
                    if (this.values.minValue === this.values.maxValue || this.values.minValue > this.values.maxValue) {
                        this.elements.answerField.innerText =  this.getErrorPhrase();
                        this.end();
                    }
                    else {
                        this.values.minValue = this.values.answerNumber + 1;
                        this.recalc();
                    }
                }
            });

            this.elements.btnLess.addEventListener('click', () => {
                if (this.run)
                {
                    if (this.values.minValue === this.values.maxValue || this.values.minValue > this.values.maxValue) {
                        this.elements.answerField.innerText =  this.getErrorPhrase();
                        this.end();
                    }
                    else {
                        this.values.maxValue = this.values.answerNumber - 1;
                        this.recalc();
                    }
                }
            });

            this.elements.btnRetry.addEventListener('click', () => {
                this.init();
            });

            this.initedEvents = true;
        }
    },

    recalc: function ()
    {
        this.values.answerNumber  = Math.floor((this.values.minValue + this.values.maxValue) / 2);
        this.values.orderNumber++;
        this.elements.orderNumberField.innerText = this.values.orderNumber;
        this.elements.answerField.innerText = this.getAnswerText(this.numberToWords(this.values.answerNumber));
    },

    start: function ()
    {
        this.elements.gameContainer.style.display = 'none';
        this.modals.first.show();
    },

    end: function ()
    {
        this.run = false;
    },

    initElements: function ()
    {
        for (let e in this.ids)
        {
            this.elements[e] = document.querySelector(this.ids[e]);
        }

        this.elements.modalFirst.querySelector('#minValue').value = '';
        this.elements.modalFirst.querySelector('#maxValue').value = '';
    },

    initModal: function ()
    {
        let options = {
            backdrop: false
        }
        this.modals.first = new bootstrap.Modal(this.elements.modalFirst, options);
        this.modals.finish = new bootstrap.Modal(this.elements.modalFinish, options);
    },

    initPlay: function ()
    {
        this.values.answerNumber = Math.floor((this.values.minValue + this.values.maxValue) / 2);
        this.values.orderNumber = 1;
        this.elements.orderNumberField.innerText = this.values.orderNumber;
        this.elements.answerField.innerText = this.getAnswerText(this.values.answerNumber);
        this.elements.gameContainer.style.display = '';
        this.run = true;
    },

    parseMinValue: function (value)
    {
        value = parseInt(value);
        value = isNaN(value) ? 0 : value;
        return (value <= -1000 ? -999 : value);
    },

    parseMaxValue: function (value)
    {
        value = parseInt(value);
        value = isNaN(value) ? 100 : value;
        return (value >= 1000 ? 999 : value);
    },

    numberToWords: function (number)
    {
        let arrNumbers = [
            ['','один','два','три','четыре','пять','шесть','семь','восемь','девять'],
            ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'],
            ['','','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'],
            ['','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'],
        ],
            sNumberTransform = '',
            sNumber = '',
            isNeg = false;

        if (number === 0) return '0';
        if (number < 0) isNeg = true;
        number = Math.abs(number);

        if (number < 10) {
            sNumberTransform = arrNumbers[0][number];
        }

        if (number >= 10 && number < 20) {
            sNumberTransform = arrNumbers[1][number % 10];
        }

        if (number >= 20 && number <=99) {
            sNumberTransform = arrNumbers[2][Math.floor(number / 10)] + ' ' + arrNumbers[0][number % 10];
        }

        if (number > 100 && number <= 999) {
            sNumberTransform = arrNumbers[3][Math.floor(number / 100)] + ' ';
            sNumberTransform += (number % 100 >= 10 && number % 100 < 20) ? arrNumbers[1][number % 100 % 10] : arrNumbers[2][Math.floor(number / 10) % 10] + ' ' + arrNumbers[0][number % 10];
        }

        if (number === 100) {
            sNumberTransform = arrNumbers[3][2];
        }

        sNumberTransform = (isNeg ? 'минус ':'') + sNumberTransform.trim();
        sNumberTransform = sNumberTransform.replace('  ',' ');

        return sNumberTransform.length < 20 ? sNumberTransform : isNeg ? (-1) * number : number;
    },

    getModalSecondContent: function ()
    {
        return `Загадайте любое целое число от ${this.values.minValue} до ${this.values.maxValue}, а я его угадаю`;
    },

    getAnswerText: function (number)
    {
        let index = Math.round(Math.random() * (this.answerPhrase.length - 1));
        return this.answerPhrase[index].replace('{{answerNumber}}', number);
    },

    getSuccessPhrase: function ()
    {
        let index = Math.round(Math.random() * (this.successPhrase.length - 1));
        return this.successPhrase[index];
    },

    getErrorPhrase: function ()
    {
        let index = Math.round(Math.random() * (this.errorPhrase.length - 1));
        return this.errorPhrase[index];
    }

}

document.addEventListener('DOMContentLoaded', () => game.init())
