import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.Top1}>
          <View style={styles.img}>
            <Image source={require("./images/book.png")}></Image>
          </View>
          <View style={styles.Top1Right}>
            <Text style={styles.textTop}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.textTop}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.textGia}>141.800 đ</Text>
            <Text
              style={[{ textDecorationLine: "line-through", marginTop: 2 }]}
            >
              141.800 đ
            </Text>
            <View style={[{ flexDirection: "row", marginTop: 2 }]}>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <Text style={[{ color: "#000000", fontSize: 13 }]}>-</Text>
                </View>
              </TouchableOpacity>
              <Text style={[{ marginHorizontal: 15 }]}>1</Text>
              <TouchableOpacity>
                <View style={styles.icon}>
                  <Text style={[{ color: "#000000", fontSize: 13 }]}>+</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={[
                  {
                    marginLeft: 90,
                    color: "#134FEC",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  },
                ]}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Top2}>
          <View style={styles.Top2Text}>
            <Text style={[styles.textTop, { marginLeft: 20, marginRight: 30 }]}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={[styles.textTop, { color: "#134FEC" }]}>
              Xem tại đây
            </Text>
          </View>
          <View style={styles.Top2Button}>
            <View style={styles.Top2ButtonText}>
              <TextInput
                style={[
                  {
                    textAlign: "center",
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    width: "100%",
                    color: "#011627",
                    fontFamily: "Roboto",
                    fontSize: 18,
                    fontWeight: "bold",
                  },
                ]}
                editable={false}
                selectTextOnFocus={false}
              >

                Mã giảm giá
              </TextInput>
            </View>

            <View style={styles.Top2ButtonRight}>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: "#0A5EB7",
                    width: "80%",
                    height: 50,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      color: "#FFFFFF",
                      fontFamily: "Roboto",
                      fontSize: 19,
                      fontWeight: "bold",
                    },
                  ]}
                >
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center1}>
          <Text
            style={[
              {
                marginLeft: 20,
                fontFamily: "Roboto",
                fontSize: 13,
                fontWeight: "bold",
                marginVertical: 25,
              },
            ]}
          >
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text
            style={[
              {
                marginLeft: 5,
                fontFamily: "Roboto",
                fontSize: 13,
                fontWeight: "bold",
                marginVertical: 25,
                color: "#134FEC",
              },
            ]}
          >
            Nhập tại đây?
          </Text>
        </View>
        <View style={styles.center2}>
          <Text
            style={[
              {
                marginLeft: 20,
                fontFamily: "Roboto",
                fontSize: 19,
                fontWeight: "bold",
                marginTop: 20,
              },
            ]}
          >
            Tạm tính
          </Text>
          <Text
            style={[
              {
                marginLeft: 20,
                fontFamily: "Roboto",
                fontSize: 19,
                fontWeight: "bold",
                marginTop: 20,
                color: "#EE0D0D",
                marginRight: 30,
              },
            ]}
          >
            141.800 đ
          </Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom1}>
          <Text
            style={[
              {
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: "bold",
                color: "#808080",
              },
            ]}
          >
            Thành tiền
          </Text>
          <Text
            style={[
              {
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: "bold",
                color: "#EE0D0D",
                marginRight: 20,
              },
            ]}
          >
            141.800 đ
          </Text>
        </View>
        <View style={styles.bottom2}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#E53935",
                height: 50,
                borderRadius: 5,
                marginHorizontal: 20,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={[
                {
                  color: "#FFFFFF",
                  fontFamily: "Roboto",
                  fontSize: 19,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                },
              ]}
            >
              Tiến hành đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTop: {
    flex: 2,
    marginTop: 50,
  },
  Top1: {
    flex: 1,
    flexDirection: "row",
    // justifyContent:"space-between",
    // alignItems:"center"
  },

  img: {
    flex: 1,
    marginLeft: 20,
  },
  Top1Right: {
    flex: 2,
  },
  textTop: {
    color: "#000000",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
  textGia: {
    fontSize: 19,
    color: "#EE0D0D",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  icon: {
    marginTop: 2,
    backgroundColor: "#808080",
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  Top2: {
    flex: 1,
  },
  Top2Text: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  Top2ButtonText: {
    flex: 2,
    marginLeft: 20,
  },
  Top2ButtonRight: {
    flex: 1,
    marginLeft: 20,
    alignItems: "center",
  },
  Top2Button: {
    flex: 1,
    flexDirection: "row",
    // justifyContent:"space-between"
  },
  containerCenter: {
    flex: 2,
    backgroundColor: "#C4C4C4",
  },
  center1: {
    marginVertical: 15,
    height: 70,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
  center2: {
    height: 70,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom1: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
  },
  containerBottom: {
    flex: 1,
  },
});
