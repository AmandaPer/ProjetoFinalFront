import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: '100%'
    },
    listContent:{
        padding:24,
        paddingBottom: 150
    },
    input: {
        color: 'black',
        fontSize: 16,
        width: '80%',
        alignSelf: 'center',
         
    },
    icon: {
      marginRight: 12,
      width: '40%',
      alignSelf: 'flex-start',
  }

    

}
);

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 900;
  color: #4267b2;
  background: #e6e6e6;
  align-items: center;
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: "#C41F1F";
`;
