const validations = {
    'corp.name': [
        {
            required: true,
            message: 'corp.error.name.required',
        },
        {
            minLength: 2,
            message: 'corp.validate.name.length.invalid',
        },
    ],
    'corp.desc': {
        required: true,
        minLength: 1,
        message: 'corp.error.desc.required',
    },
    'corp.type': {
        required: true,
        message: 'corp.error.type.required',
    },
    'corp.period': {
        required: true,
        message: 'corp.error.period.required',
    },
    'corp.address': {
        required: true,
        minLength: 1,
        message: 'corp.error.address.required',
    },
    'corp.address2': {
        required: false,
        minLength: 1,
        message: 'corp.validate.address2',
    },
    'corp.city': {
        required: true,
        minLength: 1,
        message: 'corp.error.city.required',
    },
    'corp.province': {
        required: true,
        message: 'corp.error.province.required',
    },
    'corp.prime': {
        required: true,
        message: 'corp.error.account.prime.required',
    },
    'corp.postal': [
        {
            required: true,
            message: 'corp.error.postal.zip.code.required',
        },
    ],
    'corp.contact.name': {
        required: true,
        minLength: 1,
        message: 'corp.error.contact.name.required',
    },
    'corp.contact.phone': {
        required: true,
        minLength: 1,
        message: 'corp.error.contact.phone.required',
    },
    'corp.contact.email': [
        {
            required: true,
            message: 'corp.error.contact.email.required',
        },
        {
            pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
            message: 'corp.alert.email.format.invalid',
        },
    ],
    'ld.order.acs.accountCodeLength': {
        required: true,
        message: 'ld.error.reason.acs.code.set.length.range',
    },
    'ld.order.cancel.cancelReasonValidation': [
        {
            required: true,
            message: 'ld.error.reason.order.remarks.required',
        },
        {
            minLength: 8,
            maxLength: 30,
            message: 'ld.error.reason.common.invalid.length',
        },
    ],
    'ld.order.required.field': {
        required: true,
        message: 'ld.error.message.common.required',
    },
    'ld.order.required.flag': {
        required: true,
        message: 'ld.error.required.flag',
    },
    'ld.order.auth.code': [
        {
            required: false,
            minLength: 6,
            maxLength: 10,
            message: 'ld.error.reason.osp.authorization.codes',
        },
        {
            pattern: /^[0-9]+$/,
            message: 'ld.error.required.other.numbers.only',
        },
    ],
    'ld.order.min.max.fifteen': {
        minLength: 1,
        maxLength: 15,
        message: 'ld.error.reason.common.invalid.length',
    },
    'ld.order.off.route': {
        required: false,
        minLength: 8,
        maxLength: 8,
        message: 'ld.error.reason.dps.office.route.to',
    },
    'ld.order.numbers.only': {
        pattern: /^[0-9]+$/,
        message: 'ld.error.required.other.numbers.only',
    },
    'ld.order.min.max.ten': {
        minLength: 1,
        maxLength: 10,
        message: 'ld.error.reason.common.invalid.length',
    },
    'ld.order.min.max.thirtytwo': {
        minLength: 1,
        maxLength: 32,
        message: 'ld.error.reason.common.invalid.length',
    },
    'ld.order.hhmm.time': [
        {
            pattern: /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
            message: "Time must be in 'HHmm' format. Minimum 0000 Maximum 2359",
        },
        {
            minLength: 4,
            maxLength: 4,
            message: 'ld.error.reason.common.invalid.length',
        },
    ],
    'ld.order.tel': [
        {
            minLength: 10,
            maxLength: 10,
            message: 'ld.error.ospset.tnInvalidNumber',
        },
        {
            pattern: /^[0-9]+$/,
            message: 'ld.error.required.other.numbers.only',
        },
        {
            pattern: /^[2-9][0-9]*$/,
            message: 'ld.error.reason.tsp.tn',
        },
    ],
    'ld.order.npa.nxx': [
        {
            pattern: /^[0-9]+$/,
            message: 'ld.error.required.other.numbers.only',
        },
        {
            pattern: /^[2-9][0-9]*$/,
            message: 'ld.error.reason.tsp.tn',
        },
    ],
    'ld.order.min.max.ten.fifteen': {
        minLength: 10,
        maxLength: 15,
        message: 'ld.error.tspset.tnInvalidNumber',
    },
    'ivs.common.required.field': {
        required: true,
        message: 'ivs.error.message.common.required',
    },
    'ivs.common.phone.america': {
        minLength: 10,
        maxLength: 10,
        message: 'ivs.error.tnInvalidNumber',
    },
    'ivs.common.required.minLength.one': {
        minLength: 1,
        message: 'ivs.error.message.common.required',
    },
    'ivs.common.required.non.zero': {
        pattern: /^[1-9]\d*$/,
        message: 'ivs.error.message.common.required',
    },
    'ivs.common.phone.tollfree': [
        {
            minLength: 10,
            maxLength: 10,
            message: 'ivs.error.tnInvalidNumber',
        },
        {
            pattern: /^(8(00|66|77|88|55|44|33|22)[0-9]{7})$/,
            message: 'tf.error.reason.service.isValidTollfreeNPA',
        },
    ],
    'ivs.common.phone.vanity': [
        {
            minLength: 10,
            maxLength: 10,
            message: 'ivs.error.tnInvalidNumber',
        },
        {
            pattern: /^8(00|66|77|88|55|44|33|22)[0-9A-Z]{7}$/,
            message: 'tf.error.reason.service.isValidTollfreeNPA',
        },
    ],
    'tf.order.hhmm.time': [
        {
            pattern: /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
            message: 'tf.error.reason.invalid.time',
        },
        {
            minLength: 4,
            maxLength: 4,
            message: 'ld.error.reason.common.invalid.length',
        },
    ],
    'tf.customer.announcement.id': {
        minLength: 5,
        maxLength: 5,
        message: 'tf.error.cust.annc.must.exact.5',
    },
    'ivs.min.max.eight': {
        minLength: 8,
        maxLength: 8,
        message: 'tf.error.min.max.length.eight',
    },
    'ivs.corp.tel': [
        {
            minLength: 10,
            maxLength: 10,
            message: 'ld.error.ospset.tnInvalidNumber',
        },
        {
            pattern: /^[0-9]+$/,
            message: 'ld.error.required.other.numbers.only',
        },
        {
            pattern: /^[2-9][0-9]*$/,
            message: 'ld.error.reason.tsp.tn',
        },
    ],
};

const validate = (validationRule, value) => {
    let validation;
    if (typeof validationRule === 'object') {
        validation = validationRule;
    } else {
        validation = validations[validationRule];
    }
    if (!validation) return {success: true};

    if (!Array.isArray(validation)) validation = [validation];

    validation = recurseResolveValidations(validation);

    let failureMessages = validation
        .filter((v) => v)
        .filter((validationItem) => {
            let success = validateRequired(validationItem.required, value);
            success =
                success && validateMinLength(validationItem.minLength, value);
            success =
                success && validateMaxLength(validationItem.maxLength, value);
            success = success && validateMin(validationItem.min, value);
            success = success && validateMax(validationItem.max, value);
            success = success && validatePattern(validationItem.pattern, value);
            return !success;
        })
        .map((failedValidation) => {
            return failedValidation.message;
        });

    if (failureMessages && failureMessages.length > 0)
        return {success: false, error: failureMessages[0]};
    return {success: true};
};
const validateRequired = (required, value) => {
    if (required) {
        let val = value;
        if (typeof value === 'string') val = value.trim();
        if (!val) return false;
    }
    return true;
};
const validateMinLength = (minLength, value) => {
    if (!minLength || !value) return true;
    if (value.trim().length >= minLength) return true;
    else return false;
};
const validateMaxLength = (maxLength, value) => {
    if (!maxLength || !value) return true;
    if (value.trim().length <= maxLength) return true;
    else return false;
};
const validateMin = (min, value) => {
    if (!min || !value) return true;
    if (Number(value) >= min) return true;
    else return false;
};
const validateMax = (max, value) => {
    if (!max || !value) return true;
    if (Number(value) <= max) return true;
    else return false;
};
const validatePattern = (pattern, value) => {
    if (!pattern || !value) return true;
    return pattern.test(value.trim());
};

const recurseResolveValidations = (validation) => {
    return validation.flatMap((v) => {
        if (typeof v === 'string') {
            let resolvedValidation = validations[v];
            if (resolvedValidation) {
                return Array.isArray(resolvedValidation)
                    ? recurseResolveValidations(resolvedValidation)
                    : recurseResolveValidations([resolvedValidation]);
            }
            // TODO remove it after development
            else {
                v && console.log('No validation rules with rule name:' + v);
            }
        } else {
            return v;
        }
    });
};

export default validate;
