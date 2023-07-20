import { RFValue } from "react-native-responsive-fontsize";
import {View, Text, Image, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Postcard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              story: this.props.story
            })
          }
        ></TouchableOpacity>
            <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}></Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}></Image>
                    <View style={styles.captionContainer}>
                        <Text style={stylescaptionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}></View>
                    <View style={styles.likeButton}></View>
                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"}></Ionicons>
                    <Text style={styles.likeText}>32K</Text>
                </View>
            </View>
        )
    }
}

