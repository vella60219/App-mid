import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Center, Input, ScrollView, FormControl ,useColorMode, Text ,HStack, VStack, Pressable ,useTheme, WarningOutlineIcon } from "native-base";
import MyTheme from "../Theme";

import { UserPic } from '../components/User';
import { setGeneralUserInfo, selectGeneral } from '../redux/userSlice'
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const EditProfileScreen = () => {
    const {colors} = useTheme(MyTheme);
    const { colorMode, toggleColorMode } = useColorMode();

    const formLabelStyle = {
        color: colorMode == "light" ? "muted.700" : "white",
        fontSize: 15,
        fontWeight: 500,
        letterSpacing: 1.2,
     };
     const focusInputStyle = {
        borderColor: "primary",
     }

    const general = useSelector(selectGeneral);

    const [name, setName] = useState(general.name);
    const [nameIsError, setNameIsError] = useState(true);
    const [bio, setBio] = useState(general.bio);

    const dispatch = useDispatch();

    const nameRegex = /\S+/;

    useEffect(() => {
        if (!nameIsError)
           dispatch(setGeneralUserInfo({ name, bio }))

        if (name.match(nameRegex)) setNameIsError(false)
        else setNameIsError(true);

     }, [name, bio]);




    return (
        <ScrollView
            _light={{bg: colors.white }}
            _dark={{bg:colors.black }}
        >
            <VStack
                flex={1}
                px="5%"
            >
                <Center>
                    <UserPic/>
                    <Pressable
                    mb={15} py="7px"
                    // onPress={onPress}
                    >
                        <Text
                            fontSize='12' fontWeight="500"
                            letterSpacing={0.03}
                            color="primary"
                        >更改個人相片</Text>
                    </Pressable>
                </Center>
                <FormControl mb={39} isRequired isInvalid={nameIsError}>
                    <HStack alignItems="center">
                        <Box
                            width= '25%'
                        >
                            <FormControl.Label _text={formLabelStyle}>
                                名字
                            </FormControl.Label>
                        </Box>
                        <Box
                            width= '70%'
                        >
                            <Input
                                variant="underlined" _focus={focusInputStyle} value={name}
                                onChangeText={text => setName(text)}
                            />

                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                請輸入名字
                            </FormControl.ErrorMessage>
                        </Box>
                    </HStack>
                </FormControl>
                <FormControl mb={39} >
                    <HStack alignItems="center">
                        <Box
                            width= '25%'
                        >
                            <FormControl.Label _text={formLabelStyle}>
                                個人簡介
                            </FormControl.Label>
                        </Box>
                        <Box
                            width= '70%'
                        >
                            <Input
                                variant="underlined" _focus={focusInputStyle} value={bio}
                                onChangeText={text => setBio(text)}
                            />
                        </Box>
                    </HStack>
                </FormControl>
            </VStack>
        </ScrollView>
    );
}

export default EditProfileScreen;