import {View, Image, StyleSheet} from 'react-native';
import GlobalHeader from '../View/Header'

const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      height:'100%',
      width:'100%',flex:6,
      
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const Hero =()=>{
    return(
        <View style={styles.container}>
          <GlobalHeader></GlobalHeader>
           <Image
          style={styles.stretch}
          source={require("../../assets/img.png")}
        />
{/*        
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        /> */}
      </View>
    )
}

export default Hero