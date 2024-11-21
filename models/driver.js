const { sequelize } = require('../db'); // Destructure to get the sequelize instance
const { DataTypes } = require('sequelize');

const Driver = sequelize.define('Driver', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    father_name: {
        type: DataTypes.STRING,
    },
    marital_status: {
        type: DataTypes.STRING,
    },
    spouse_name: {
        type: DataTypes.STRING,
    },
    spouse_phone_number: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    dob: {
        type: DataTypes.DATEONLY,
    },
    religion: {
        type: DataTypes.STRING,
    },
    nationality: {
        type: DataTypes.STRING,
    },
    blood_group: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    security_deposit: {
        type: DataTypes.JSON,
    },
    status: {
        type: DataTypes.STRING,
    },
    remarks: {
        type: DataTypes.STRING,
    },
    joined_at: {
        type: DataTypes.DATEONLY,
    },
    resigned_at: {
        type: DataTypes.DATEONLY,
    },
    qualification: {
        type: DataTypes.STRING,
    },
    source: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    created_by: {
        type: DataTypes.INTEGER,
    },
    updated_at: {
        type: DataTypes.DATE,
    },
    updated_by: {
        type: DataTypes.INTEGER,
    },
    uber_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uber_phone: {
        type: DataTypes.STRING,
    },
    org_id: {
        type: DataTypes.INTEGER,
    },
    driving_experience: {
        type: DataTypes.DECIMAL(10, 2),
    },
    is_active: {
        type: DataTypes.BOOLEAN,
    },
    emergency_contacts: {
        type: DataTypes.JSON,
    },
    permanent_address: {
        type: DataTypes.JSON,
    },
    present_address: {
        type: DataTypes.JSON,
    },
    accommodation: {
        type: DataTypes.BOOLEAN,
    },
    pmv_id: {
        type: DataTypes.STRING,
        unique: true,
    },
    security_deposit_documents: {
        type: DataTypes.TEXT,
    },
    bank_details: {
        type: DataTypes.JSON,
    },
    alternate_phone_number: {
        type: DataTypes.STRING,
    },
    poc: {
        type: DataTypes.STRING,
    },
    referral_information: {
        type: DataTypes.JSON,
    },
    is_tested: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'drivers',
    timestamps: false,
});

module.exports = Driver;
