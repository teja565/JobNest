import { useState } from 'react'; 
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'; 

import { useRouter } from 'expo-router';
import { icons, SIZES } from "../../../constants"; 
import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ["Full-Time", "Part-Time", "Contract"];
  const [activeJobType, setActiveJobType ] = useState("Full-time");
  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Teja</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput }
               placeholderTextColor="#999" //added color
              value=""
              onChangeText={()=>{}} 
              placeholder="What Are You Looking For?"
            />
          </View>

          <TouchableOpacity 
            style={styles.searchBtn} 
            onPress={() => { console.log("Search clicked!"); }}
          >
            <Image 
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style = {styles.tab(activeJobType, item)}
              onPress = {()=>{
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}            
            >
              <Text style = {styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity> 
          )}
          keyExtractor = {item => item}
          contentContainerStyle = {{columnGap : SIZES.small}}
          horizontal 
        />
      </View>
    </View>
  )
}

export default Welcome;
