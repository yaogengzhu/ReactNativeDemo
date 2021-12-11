import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
const list = [
  {
    cateId: 910,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg',
    name: '京东超市',
  },
  {
    cateId: 101574,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg.dpg',
    name: '数码电器',
  },
  {
    cateId: 101578,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg.dpg',
    name: '京东服饰',
  },
  {
    cateId: 960,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg.dpg',
    name: '京东生鲜',
  },
  {
    cateId: 100325,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg',
    name: '京东到家',
  },
  {
    cateId: 101623,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg.dpg',
    name: '充值缴费',
  },
  {
    cateId: 19,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36069/14/16068/6465/60ec0f67E155f9488/595ff3e606a53f02.png!q70.jpg.dpg',
    name: '9.9元拼',
  },
  {
    cateId: 100209,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg.dpg',
    name: '领券',
  },
  {
    cateId: 100180,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg.dpg',
    name: '领津贴',
  },
  {
    cateId: 23,
    icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg',
    name: 'PLUS会员',
  },
];

const Menu = () => {
  return (
    <View style={styles.row}>
      {list.map(item => (
        <TouchableOpacity style={[styles.menuBox]} key={item.cateId}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.icon,
            }}
          />
          <Text style={[styles.word]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  menuImg: {
    width: 35,
    height: 35,
    // backgroundColor: 'pink',
  },
  menuBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    height: 60,
    borderRadius: 4,
    // backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginBottom: 6,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
    color: '#fff',
  },
  word: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  selectedWord: {
    color: '#fff',
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
});

export default Menu;
