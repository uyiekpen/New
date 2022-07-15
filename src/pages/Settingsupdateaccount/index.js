import React from "react";

import {
  Column,
  Row,
  Image,
  Input,
  Button,
  Stack,
  Text,
  Line,
  List,
} from "components";

const SettingsupdateaccountPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-roboto items-center justify-end mx-[auto] outline outline-[4px] outline-red_A700 xl:pl-[2px] lg:pl-[2px] pl-[3px] xl:pt-[2px] lg:pt-[2px] pt-[3px] w-[100%]">
        <header className="lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_6.png"}
              className="lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[4%]"
              alt="Logo"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
              WrapClassName="3xl:ml-[869px] 3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:ml-[563px] lg:my-[2px] lg:px-[14px] lg:py-[12px] ml-[724px] my-[3px] px-[19px] py-[16px] rounded-radius20 w-[20%] xl:ml-[644px] xl:my-[2px] xl:px-[16px] xl:py-[14px]"
              name="Frame117"
              placeholder="Search"
              suffix={
                <Image
                  onClick={() => setInputvalue("")}
                  src={
                    inputvalue?.length
                      ? "images/close6.svg"
                      : "images/img_magnifyingglass_6.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_8.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group178.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group178"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_3.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_17.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Stack className="xl:h-[1139px] h-[1280px] 2xl:h-[1281px] 3xl:h-[1537px] lg:h-[996px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Column className="absolute justify-start top-[1%] w-[100%]">
            <Line className="bg-blue_800 h-[1px] 3xl:h-[2px] 2xl:h-[2px] rotate-[-90deg] w-[1437px]" />
            <div className="bg-blue_800 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[193px] xl:ml-[221px] ml-[249px] 3xl:ml-[298px] xl:mr-[1049px] mr-[1180px] 3xl:mr-[1416px] lg:mr-[917px] lg:mt-[387px] xl:mt-[443px] mt-[498px] 3xl:mt-[597px] rounded-radius4 w-[1%]"></div>
          </Column>
          <Stack className="absolute xl:h-[1139px] h-[1280px] 2xl:h-[1281px] 3xl:h-[1537px] lg:h-[996px] w-[18%]">
            <Column className="absolute bg-white_A700 items-start justify-center lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] right-[1%] shadow-bs2 w-[99%]">
              <Row className="items-center justify-end 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] ml-[92px] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[40%]">
                <Image
                  src={"images/img_vector_18.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                  Home
                </Text>
              </Row>
              <Row className="items-center justify-end 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[45%]">
                <Image
                  src={"images/img_chalkboardteach_3.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ChalkboardTeach"
                />
                <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Mentor
                </Text>
              </Row>
              <Row className="items-center justify-end 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[36%]">
                <Image
                  src={"images/img_bookopen_3.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="BookOpen"
                />
                <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Test
                </Text>
              </Row>
              <Row className="items-center justify-end 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[49%]">
                <Image
                  src={"images/img_notebook_3.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Notebook"
                />
                <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Resume
                </Text>
              </Row>
              <Row className="items-center justify-end 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[52%]">
                <Image
                  src={"images/img_suitcasesimple_4.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="SuitcaseSimple"
                />
                <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Interview
                </Text>
              </Row>
              <Row className="items-center justify-end lg:mb-[637px] xl:mb-[729px] mb-[820px] 3xl:mb-[984px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] ml-[88px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[59%]">
                <Image
                  src={"images/img_usersthree_5.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="UsersThree"
                />
                <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Community
                </Text>
              </Row>
            </Column>
            <Input
              className="bg-transparent border-0 font-bold p-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              WrapClassName="3xl:mt-[552px] 3xl:pb-[21px] 3xl:pl-[28px] 3xl:pr-[42px] 3xl:pt-[24px] absolute bg-blue_800 flex lg:mt-[357px] lg:pb-[14px] lg:pl-[18px] lg:pr-[27px] lg:pt-[15px] mt-[460px] pb-[18px] pl-[24px] pr-[35px] pt-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] top-[36%] w-[68%] xl:mt-[409px] xl:pb-[16px] xl:pl-[21px] xl:pr-[31px] xl:pt-[17px]"
              name="Group151"
              placeholder="Settings"
              prefix={
                <Image
                  src={"images/img_gear_6.png"}
                  className="w-[24.77px] h-[24.77px] absolute lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                  alt="Gear"
                />
              }
            ></Input>
            <Column className="absolute bg-white_A700 items-start justify-start p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs top-[40%] w-[68%]">
              <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc1 w-[auto]">
                Update account
              </Text>
              <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                My Wallet
              </Text>
              <Text className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                Change password
              </Text>
            </Column>
          </Stack>
          <Column className="absolute justify-start right-[5%] top-[24%] w-[74%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                  <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius35 w-[100%]">
                    <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                      John Felix
                    </Text>
                    <Image
                      src={"images/img_pencilsimple_10.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                  </Row>
                  <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:px-[10px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Name
                  </Text>
                </Stack>
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                  <Image
                    src={"images/img_pencilsimple_11.png"}
                    className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[6%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="PencilSimple"
                  />
                  <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                    <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        UI/UX DESIGN
                      </Text>
                    </Column>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Stack
                    </Text>
                  </Stack>
                </Stack>
              </Row>
              <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                  <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                    <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                      John Felix247@gmail.com
                    </Text>
                    <Image
                      src={"images/img_pencilsimple_12.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                  </Row>
                  <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Email Address
                  </Text>
                </Stack>
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                  <Image
                    src={"images/img_pencilsimple_13.png"}
                    className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="PencilSimple"
                  />
                  <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                    <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        Design, User research
                      </Text>
                    </Column>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Expertise
                    </Text>
                  </Stack>
                </Stack>
              </Row>
            </List>
            <Row className="items-start justify-start lg:ml-[216px] xl:ml-[247px] ml-[278px] 3xl:ml-[333px] lg:mr-[427px] xl:mr-[489px] mr-[550px] 3xl:mr-[660px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[22%]">
              <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_7f w-[auto]">
                Add email address
              </Text>
              <Image
                src={"images/img_plus_3.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[0] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Plus"
              />
            </Row>
          </Column>
          <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] right-[5%] top-[42%] w-[35%]">
            <Image
              src={"images/img_pencilsimple_14.png"}
              className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[3%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
              alt="PencilSimple"
            />
            <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
              <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                  http://
                </Text>
              </Column>
              <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Linkedin profile
              </Text>
            </Stack>
          </Stack>
          <Column className="absolute bottom-[10%] items-start justify-start right-[5%] w-[74%]">
            <Row className="items-start justify-evenly w-[100%]">
              <Column className="items-start justify-start lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:pr-[31px] xl:pr-[35px] pr-[40px] 3xl:pr-[48px] w-[52%]">
                <Stack className="lg:h-[128px] xl:h-[146px] h-[164px] 2xl:h-[165px] 3xl:h-[197px] w-[100%]">
                  <Row className="absolute border border-blue_800 border-solid items-center justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius40 w-[100%]">
                    <Text className="font-semibold leading-[normal] lg:mb-[17px] xl:mb-[20px] mb-[23px] 3xl:mb-[27px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc text-left w-[83%]">
                      A user centric, proactive ui designer
                      <br />
                      with experience in user satisfaction
                    </Text>
                    <Image
                      src={"images/img_pencilsimple_15.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[61px] xl:mt-[70px] mt-[79px] 3xl:mt-[94px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                  </Row>
                  <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    About
                  </Text>
                </Stack>
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                    <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                      9143526566
                    </Text>
                    <Image
                      src={"images/img_pencilsimple_16.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                  </Row>
                  <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    Phone number
                  </Text>
                </Stack>
              </Column>
              <List
                className="gap-[0] 3xl:mb-[105px] lg:mb-[68px] xl:mb-[78px] mb-[88px] min-h-[auto] w-[48%]"
                orientation="vertical"
              >
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
                  <Image
                    src={"images/img_pencilsimple_17.png"}
                    className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="PencilSimple"
                  />
                  <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                    <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        http://
                      </Text>
                    </Column>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Github link
                    </Text>
                  </Stack>
                </Stack>
                <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
                  <Image
                    src={"images/img_pencilsimple_18.png"}
                    className="absolute bottom-[29%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="PencilSimple"
                  />
                  <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                    <Column className="absolute border border-blue_800 border-solid items-start justify-start lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        http://
                      </Text>
                    </Column>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Portfolio website link
                    </Text>
                  </Stack>
                </Stack>
              </List>
            </Row>
            <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[48%]">
              <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                  English, French
                </Text>
                <Image
                  src={"images/img_pencilsimple_19.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="PencilSimple"
                />
              </Row>
              <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Professional Languages
              </Text>
            </Stack>
            <Button className="bg-blue_800 font-bold lg:ml-[344px] xl:ml-[394px] ml-[443px] 3xl:ml-[531px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[17%]">
              Update
            </Button>
          </Column>
          <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] left-[21%] top-[43%] w-[35%]">
            <Image
              src={"images/img_vector_19.png"}
              className="absolute bottom-[35%] lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] object-contain right-[5%] w-[3%]"
              alt="Vector"
            />
            <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
              <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                  Lagos
                </Text>
                <Image
                  src={"images/img_group59_1.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[29px] xl:mr-[33px] mr-[38px] 3xl:mr-[45px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Group59"
                />
              </Row>
              <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pr-[10px] pr-[12px] 3xl:pr-[14px] lg:pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Location
              </Text>
            </Stack>
          </Stack>
          <Stack className="absolute lg:h-[204px] xl:h-[234px] h-[262px] 2xl:h-[263px] 3xl:h-[315px] top-[1%] w-[82%]">
            <div className="absolute bg-blue_800_b7 lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] w-[100%]"></div>
            <Stack className="absolute lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] left-[3%] w-[15%]">
              <Image
                src={"images/img_ellipse64_1.png"}
                className="absolute lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] object-cover rounded-radius50 w-[100%]"
                alt="Ellipse64"
              />
              <Button className="absolute bg-white_A700 bottom-[0] flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[4%] rounded-radius30 shadow-bs3 w-[33%]">
                <Image
                  src={"images/img_group176.png"}
                  className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                  alt="Group176"
                />
              </Button>
            </Stack>
            <Button className="absolute bg-white_A700 bottom-[6%] flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[12%] rounded-radius30 shadow-bs3 w-[5%]">
              <Image
                src={"images/img_group175.png"}
                className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                alt="Group175"
              />
            </Button>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default SettingsupdateaccountPage;
