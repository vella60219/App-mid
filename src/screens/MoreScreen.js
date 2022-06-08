import React from 'react';
import { Center, ScrollView, Switch ,useColorMode, Text ,HStack ,useTheme} from "native-base";
import MyTheme from "../Theme";

import { UserMoreProfile } from '../components/User';

const MoreScreen = ({ navigation }) => {
    const {colors} = useTheme(MyTheme);
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <ScrollView
            _light={{bg: colors.white }}
            _dark={{bg:colors.black }}
        >
            <UserMoreProfile
                navigation={navigation}
            />
            <Center
                w="90%" mx="auto"
                borderBottomWidth={1}
                borderBottomColor="grey"
            ></Center>
            <Center flex={1}>           
                <HStack 
                    justifyContent="space-around" 
                    alignItems ="center" 
                    px="20" py="4" mt="6"
                    space={3}
                    borderWidth={1}
                    borderRadius={15}
                    borderColor="grey"
                >
                    <Text fontSize="xl">{colorMode=="light"?"Light Mode" : "Dark Mode"}</Text>
                    <Switch 
                        size="lg"
                        ml="3"
                        name="light mode"
                        isChecked={colorMode === 'dark'}
                        onToggle={toggleColorMode}
                        // accessiblityLabel = "display-mode"
                        // accessibilityHint="light or dark mode"
                    />
                </HStack> 
            </Center>
        </ScrollView>
    );
}

export default MoreScreen;