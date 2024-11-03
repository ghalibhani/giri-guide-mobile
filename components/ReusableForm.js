import React from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Entypo from "@expo/vector-icons/Entypo";

const ReusableInput = ({
  fields,
  onSubmit,
  submitButtonText = "Submit",
  buttonColor,
}) => {
  const [formData, setFormData] = React.useState({});
  const [selectedField, setSelectedField] = React.useState(null);
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      setFormData({
        ...formData,
        [selectedField]: date.toLocaleDateString("en-CA"),
      });
    }
    setOpenDatePicker(false);
  };

  const handleTogglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }

    setFormData({});
  };

  return (
    <View>
      {fields.map((field, index) => (
        <View key={index} className='mb-[20]'>
          <Text className='mb-[8]'>
            {field.label}
            {field.required && <Text style={{ color: "red" }}> *</Text>}{" "}
          </Text>
          {field.keyboardType === "date" ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setSelectedField(field.name);
                  setOpenDatePicker(true);
                }}
                className='border border-gray-300 p-3 w-full rounded-xl'
              >
                <Text style={{ color: formData[field.name] ? "#000" : "#999" }}>
                  {formData[field.name] || field.placeholder}
                </Text>
              </TouchableOpacity>

              {openDatePicker && (
                <Modal visible={openDatePicker} transparent>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <DateTimePicker
                      mode='date'
                      value={
                        formData[selectedField]
                          ? new Date(formData[selectedField])
                          : new Date()
                      }
                      onChange={handleDateChange}
                    />
                  </View>
                </Modal>
              )}
            </>
          ) : field.type === "gender" ? (
            <Picker
              selectedValue={formData[field.name]}
              onValueChange={(value) => handleChange(field.name, value)}
            >
              <Picker.Item label='Pilih Gender' value='' />
              <Picker.Item label='Pria' value='pria' />
              <Picker.Item label='Wanita' value='wanita' />
            </Picker>
          ) : (
            <View>
              <TextInput
                className='border border-gray-300 p-3 w-full rounded-xl'
                style={{
                  minHeight: field.multiline ? 80 : 40,
                  textAlignVertical: field.multiline ? "top" : "center",
                }}
                placeholder={field.placeholder}
                keyboardType={field.keyboardType}
                secureTextEntry={
                  field.secureTextEntry && !showPassword[field.name]
                }
                multiline={field.multiline || false}
                onChangeText={(value) => handleChange(field.name, value)}
                value={formData[field.name]}
                autoCapitalize='none'
              />
              {field.secureTextEntry && (
                <TouchableOpacity
                  onPress={() => handleTogglePasswordVisibility(field.name)}
                  className='absolute right-4 top-[50%] transform -translate-y-1/2'
                >
                  <Text>
                    {showPassword[field.name] ? (
                      <Entypo name='eye' size={20} color='black' />
                    ) : (
                      <Entypo name='eye-with-line' size={20} color='black' />
                    )}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      ))}
      <TouchableOpacity
        className={`${buttonColor} h-14 w-full justify-center items-center rounded-xl`}
        onPress={handleSubmit}
      >
        <Text className='text-white font-isemibold'>{submitButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReusableInput;
