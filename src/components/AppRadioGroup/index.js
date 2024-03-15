import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppIcon from '~components/AppIcon';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';

const AppRadioGroup = ({data, selectingItem, onItemPress}) => {
  return (
    <View style={{backgroundColor: COLORS.WHITE, padding: 16, borderRadius: 20}}>
      {data?.map(item => {
        return (
          <TouchableOpacity
            key={item?.id}
            activeOpacity={0.7}
            onPress={() => {
              onItemPress(item.id);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 16,
              backgroundColor: COLORS.WHITE,
            }}>
            <AppIcon
              type="material"
              name={selectingItem === item.id ? 'radio-button-on' : 'radio-button-off'}
              color={selectingItem === item.id ? COLORS.TAB_BAR_ACTIVE : COLORS.TAB_BAR_INACTIVE}
            />
            {!!item?.icon && (
              <View
                style={{
                  backgroundColor: item.iconBackground,
                  padding: 12,
                  marginLeft: 8,
                  borderRadius: 8,
                }}>
                <AppIcon {...item.icon} color={COLORS.WHITE} size={20} />
              </View>
            )}
            <AppText
              size={16}
              style={{marginLeft: 8}}
              color={selectingItem === item.id ? COLORS.TAB_BAR_ACTIVE : COLORS.BLACK}>
              {item?.title}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AppRadioGroup;
