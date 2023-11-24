import React from 'react';
import {View, Text, SectionList} from 'react-native';

const sections = [
  {title: 'Giảng Viên', data: [{id: '1', name: 'Vĩnh Kỳ', age: 20}]},
  {
    title: 'Nhóm 1',
    data: [
      {id: '2', name: 'Tran Van B', age: 21},
      {id: '3', name: 'Le Thi C', age: 22},
    ],
  },
  {
    title: 'Nhóm 2',
    data: [
      {id: '4', name: 'Bui Minh D', age: 23},
      {id: '5', name: 'Le Van E', age: 24},
    ],
  },
  {
    title: 'Nhóm 3',
    data: [
      {id: '6', name: 'Tran Dinh F', age: 25},
      {id: '7', name: 'Nguyen Cong G', age: 26},
    ],
  },
  {
    title: 'Nhóm 4',
    data: [
      {id: '8', name: 'Bui Thi H', age: 27},
      {id: '9', name: 'Dang Ngoc X', age: 28},
    ],
  },
  {
    title: 'Nhóm 5',
    data: [
      {id: '10', name: 'Do Van Y', age: 29},
      {id: '11', name: 'Tran Thi Z', age: 30},
    ],
  },
];

const SectionListDemo = () => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.id}
      contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 16}}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ListHeaderComponent={
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
          }}>
          Danh sách lớp App K16 HCM
        </Text>
      }
      renderSectionHeader={({section}) => (
        <Text
          style={{
            fontWeight: '500',
            fontSize: 20,
            marginTop: 16,
            marginBottom: 8,
          }}>
          {section.title}
        </Text>
      )}
      renderItem={({item}) => (
        <View
          style={{
            padding: 16,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>Tên: </Text>
            <Text>{item.name}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text>Tuổi: </Text>
            <Text>{item.age}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default SectionListDemo;
