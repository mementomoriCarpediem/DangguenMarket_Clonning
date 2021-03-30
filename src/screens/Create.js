import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import DocumentPicker from 'react-native-document-picker';
import { useForm, Controller } from 'react-hook-form';

export default function Create({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    errors,
  } = useForm();

  // const [imageFiles, setImageFiles] = useState([]),

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  // const uploadImage = async () => {
  //   // Check if any file is selected or not
  //   if (singleFile != null) {
  //     // If file selected then create FormData
  //     const fileToUpload = singleFile;
  //     const data = new FormData();
  //     data.append('name', 'Image Upload');
  //     data.append('file_attachment', fileToUpload);
  //     // Please change file upload URL
  //     let res = await fetch('http://localhost/upload.php', {
  //       method: 'post',
  //       body: data,
  //       headers: {
  //         'Content-Type': 'multipart/form-data; ',
  //       },
  //     });
  //     let responseJson = await res.json();
  //     if (responseJson.status == 1) {
  //       alert('Upload Successful');
  //     }
  //   } else {
  //     // If no file selected the show alert
  //     alert('Please Select File first');
  //   }
  // };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setImageFiles(res);
    } catch (err) {
      setImageFiles([]);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topSideText}>닫기</Text>
          </TouchableOpacity>
          <Text style={styles.topTitle}>중고거래 글쓰기</Text>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.topSideText}>완료</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={selectFile}>
          <View style={styles.imageAttachConatainer}>
            <Icon name="camera" color={'gray'} size={20} />
            <Text>0/10</Text>
          </View>
        </TouchableOpacity>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.titleInput}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={'글 제목'}
            />
          )}
          name="title"
          rules={{ required: true }}
        />
        <TouchableOpacity
          style={styles.categorySelectContainer}
          onPress={() => navigation.navigate('categorySelect')}
        >
          <Text style={{ fontSize: 18 }}>카테고리 선택</Text>
          <Icon name="chevron-forward" size={20} />
        </TouchableOpacity>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.price}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={'₩ 가격입력(선택사항)'}
            />
          )}
          name="price"
        />
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.contents}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={
                '남사면에 올릴 게시글 내용을 작성해주세요.\n(가품 및 판매 금지 품목은 게시가 제한될수 있어요.'
              }
            />
          )}
          name="contents"
          rules={{ required: true }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  topSideText: {
    fontSize: 18,
  },
  topTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  imageAttachConatainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  titleInput: {
    height: 50,
    fontSize: 20,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  categorySelectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  price: {
    fontSize: 15,
    paddingVertical: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  contents: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-start',
    fontSize: 15,
  },
});
