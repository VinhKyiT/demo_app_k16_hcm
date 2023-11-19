import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

function Ternary({condition}) {
  const [age, setAge] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAge(17);
    }, 1500);
  }, []);

  return (
    <View>
      {condition ? (
        <Text style={{color: 'black', fontSize: 30}}>
          This is rendered when condition is true.
        </Text>
      ) : (
        <Text style={{color: 'black', fontSize: 30}}>
          This is rendered when condition is false.
        </Text>
      )}
      {/* {age ? (
        age > 18 ? (
          <Text style={{color: 'black', fontSize: 30}}>Over 18 years old.</Text>
        ) : (
          <Text style={{color: 'black', fontSize: 30}}>
            Under 18 years old.
          </Text>
        )
      ) : (
        <Text style={{color: 'black', fontSize: 30}}>Loading...</Text>
      )} */}
      <Text style={{color: 'black', fontSize: 30}}>
        {age
          ? age > 18
            ? 'Over 18 years old'
            : 'Under 18 years old'
          : 'Loading...'}
      </Text>
    </View>
  );
}

export default Ternary;
