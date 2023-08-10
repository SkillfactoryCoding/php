const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
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
        "count": 11,
        "list": {     
            "id_1": "Инна",
            "id_2": "Александра",
            "id_3": "Дарья",
            "id_4": "Марина",
            "id_5": "Татьяна",
            "id_6": "Виктория",
            "id_7": "Анна",
            "id_8": "Екатерина",
            "id_9": "Валентина",
            "id_10": "Анастасия",
            "id_11": "Ольга"
        }
    }`,
    maleProfession: `{
        "count": 8,
        "list": {
            "id_1": "слесарь",
            "id_2": "шахтёр",
            "id_3": "солдат",
            "id_4": "водитель",
            "id_5": "учитель",
            "id_6": "писатель",
            "id_7": "менеджер по туризму",
            "id_8": "программист"
        }
    }`,
    femaleProfession: `{
        "count": 8,
        "list": {
            "id_1": "секретарь",
            "id_2": "няня",
            "id_3": "лифтёр",
            "id_4": "вахтёр",
            "id_5": "учитель",
            "id_6": "писатель",
            "id_7": "менеджер по туризму",
            "id_8": "программист"
        }
    }`,
    month: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        return this.isMale ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function() {
        return this.isMale ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';
    },

    randomLastName: function() {
        let maleName = this.randomValue(this.firstNameMaleJson),
            isMale = this.isMale,
            root = maleName;

        if (["а", "я"].indexOf(maleName.substr(maleName.length-1,1)) !== -1) {
            root = maleName.substring(0, maleName.length-1);
            if (isMale) {
                return root += "ич";
            } else {
                if (maleName.substr(maleName.length-2,1) === "т") {
                    return root += "ична";
                } else {
                    return root += "инична";
                }
            }
        } else if (maleName.substr(maleName.length-1,1) === "й") {
            root = maleName.substring(0, maleName.length-1);
            if (isMale) {
                return root += "евич";
            } else {
                return root += "евна";
            }
        } else {
            if (isMale) {
                return root += "ович";
            } else {
                return root += "овна";
            }
        }
    },

    randomProfession: function () {
        return this.isMale ? this.randomValue(this.maleProfession) : this.randomValue(this.femaleProfession);
    },

    randomDate: function () {
        let month = this.person.birthMonth,
            minDate = 1,
            maxDate = 31;

        if (month === 'февраля') maxDate = 28;
        else if (['апреля', 'июня', 'сентября', 'ноября'].indexOf(month) !== -1) maxDate = 30;

        return this.randomIntNumber(maxDate, minDate);
    },


    randomGender: function () {
        this.isMale = this.randomIntNumber(); //1 - Мужчина, 0 - Женщина
        return this.isMale ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.lastName = this.randomLastName();
        this.person.profession = this.randomProfession();

        this.person.birthYear = this.randomIntNumber(2023, 1950);
        this.person.birthMonth = this.randomValue(this.month);
        this.person.birthDate = this.randomDate();

        return this.person;
    }
};
