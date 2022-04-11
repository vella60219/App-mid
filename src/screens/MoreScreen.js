import React from 'react';
import { Center, ScrollView, Switch ,useColorMode, Text ,HStack} from "native-base";

const MoreScreen = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <ScrollView
            _light={{bg:"primary"}}
            _dark={{bg:"grey"}}
        >
            <Center flex={1}>
                <Text fontSize={30}>
                    This is MoreScreen Page
                </Text>             
                <HStack 
                    justifyContent="space-around" 
                    alignItems ="center" 
                    py={21} px={10} mt={3}
                    borderWidth={2}
                    borderRadius={15}
                    borderColor="dark.200"
                >
                    <Text fontSize="lg">{colorMode=="light"?"Light Mode" : "Dark MOde"}</Text>
                    <Switch 
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