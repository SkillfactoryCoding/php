const personGenerator = {    /* Создаем объек*/
    /*Мужские Фамилии (свойство объекта) : со значением JSON объекта */
    surnameJson: `{           
        "count": 15,
        "list": {
            "id_1": "Бабкин",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Буров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Зенин",
            "id_16": "Морозов"
        }
    }`,

    /*Мужские Имена (свойство объекта) : со значением JSON объекта */
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Елизавета",
            "id_4": "Вера",
            "id_5": "Анна",
            "id_6": "Мария",
            "id_7": "Анастасия",
            "id_8": "Елена",
            "id_9": "Виктория",
            "id_10": "Светлана"
        }
    }`,

    middleNameMaleJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Валерьевич",
            "id_2": "Петрович",
            "id_3": "Васильевич",
            "id_4": "Тимофеевич",
            "id_5": "Сергеевич",
            "id_6": "Владимирович",
            "id_7": "Игоревич",
            "id_8": "Николаевич",
            "id_9": "Федорович",
            "id_10": "Андреевич"
        }
    }`,

    middleNameFemaleJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Валерьевна",
            "id_2": "Петровна",
            "id_3": "Васильевна",
            "id_4": "Тимофеевна",
            "id_5": "Сергеевна",
            "id_6": "Владимировна",
            "id_7": "Игоревна",
            "id_8": "Николаевна",
            "id_9": "Федоровна",
            "id_10": "Андреевна"
        }
    }`,


    professionMaleJson: `{
        "count" : 12,
        "list" : {
            "id_1" :  "Токарь", 
            "id_2" : "Электрик", 
            "id_3" : "Энергетик", 
            "id_4" : "Сварщик", 
            "id_5" : "Слесарь", 
            "id_6" : "Инженер", 
            "id_7" : "Кузнец",
            "id_8" : "Моряк",
            "id_9" : "Летчик",
            "id_10" : "Шахтер",
            "id_11" : "Лесоруб",
            "id_12" : "Сантехник"
            }
    }`,

    professionFemaleJson: `{
        "count" : 9,
        "list" : {
            "id_1" : "Швея", 
            "id_2" : "Учитель", 
            "id_3" : "Косметолог", 
            "id_4" : "Врач", 
            "id_5" : "Бухгалтер", 
            "id_6" : "Маркетолог", 
            "id_7" : "Стюардесса",
            "id_8" : "Косметолог",
            "id_9" : "Веб-дизайнер"
             }
      }`,

      
    /*dateOfbirth :*/
  
    
    /*ПЕРЕМЕННЫЕ ЖЕНСКОГО И МУЖСКОГО ПОЛА КОТОРЫЕ НУЖНО БУДЕТ ДОБАВИТЬ В СЛУЧАЙНУЮ ГЕНЕРАЦИЮ
    ПРИ ДОБАВЛЕНИЕ ПОЛА ПОТРЕБУЕТСЯ СОБЛЮДАТЬ ЖЕНСКИЕ И МУЖСКИЕ ИМЕНА */
    GENDER_MALE: 'Мужчина',  
    GENDER_FEMALE: 'Женщина',

    /*метод объекта ----randomIntNumber---- отвечает за случайную генерацию*/
    /*к методу присваивается стрелочная функция которая генерирует случайные целые числа*/
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    /*метот ---randomValue--- отвечает за преобразование строк JSON в объект JS
    благодаря объекту JSON.parse(json) и происходит это преобразование, 
    внутри метода анонимная функция принимает аргумент json*/

    randomValue: function (json) {
        const obj = JSON.parse(json); 

        /*id_(формируется номер для вывода. вызывается метод randomIntNumber(max, min)
        max=obj.count, min=1) и по итогу id=3 (значения id генерируются разные)*/

        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator

        /*возвращает значение свойства id_3*/
        return obj.list[prop];
    },

    /*метод активирующий случайную генерацию Имен*/
    randomFirstName: function() {        
        /*Вызываем метот объекта this = personGenerator
        с аргументом на JSON объект*/

        if (this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        };
    },

    /*метод активирующий случайную генерацию Фамилий*/
     randomSurname: function() {  
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
            
        } else {
            let surnamefeMale = this.randomValue(this.surnameJson);
            return (`${surnamefeMale}а`)
        };
    },

    /*метод активирующий случайную генерацию Отчества*/
    randomMiddleName : function() {  
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.middleNameMaleJson);
        } else {
            return this.randomValue(this.middleNameFemaleJson);
        }        
    },

    /*метод активирующий случайную генерацию профессии*/
    randomProfession : function() {  
        
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {           
            return this.randomValue(this.professionFemaleJson);
        }        
    },

    randomGender: function() {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },



    randomBirthYear: function () {
        var monthRandom = this.randomIntNumber(12, 1);
        var year = this.randomIntNumber(2020, 1980);
        var dayRandom;
        var month;
        
        switch(monthRandom) {
            case 1:  
                month = 'Января'; 
                dayRandom = this.randomIntNumber(31, 1);
            break;

            case 2:  
                month = 'Февраля';
                    if (year % 4 != 0 || (year % 100 == 0 & year % 400 != 0)) {
                        dayRandom = this.randomIntNumber(29, 1);                    
                        /*console.log('Обычный');*/
                        
                    }  else {                    
                        dayRandom = this.randomIntNumber(28, 1); 
                        data = dayRandom + month + year;
                        /*console.log('Високосный');*/
                    };
            break;

            case 3:  
                month = 'Марта'; 
                dayRandom = this.randomIntNumber(31, 1);  
            break;

            case 4:  
                month = 'Апреля'; 
                dayRandom = this.randomIntNumber(30, 1);
            break;

            case 5:  
                month = 'Мая'; 
                dayRandom = this.randomIntNumber(31, 1); 
            break;

            case 6:  
                month = 'Июня'; 
                dayRandom = this.randomIntNumber(30, 1);
            break;

            case 7:  
                month = 'Июля'; 
                dayRandom = this.randomIntNumber(31, 1);
            break;

            case 8:  
                month = 'Августа'; 
                dayRandom = this.randomIntNumber(31, 1);
            break;

            case 9:  
                month = 'Сентября'; 
                dayRandom = this.randomIntNumber(30, 1);  
            break;

            case 10: 
                month = 'Октября'; 
                dayRandom = this.randomIntNumber(31, 1);
            break;

            case 11: 
                month = 'Ноября'; 
                dayRandom = this.randomIntNumber(30, 1);
            break;

            case 12: 
                month = 'Декабря'; 
                dayRandom = this.randomIntNumber(31, 1);
            break;
        };

        /*return this.randomIntNumber(2020, 1980);*/
        return (dayRandom + " " + month + " " + year); 
    },

    getPerson: function () {

        this.person = {};
        this.person.gender = this.randomGender();
        this.person.profession = this.randomProfession();      
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();

        
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};
