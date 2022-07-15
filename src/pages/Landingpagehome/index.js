import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Stack,
  Row,
  Image,
  Text,
  Button,
  PagerIndicator,
  SelectBox,
  Input,
  Grid,
  Line,
} from "components";

const LandingpagehomePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/landingpagehomeloading");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 items-center justify-start mx-[auto] w-[100%]">
        <Stack className="font-sfprodisplay lg:h-[1635px] xl:h-[1870px] 2xl:h-[2103px] 3xl:h-[2524px] h-[2802px] w-[100%]">
          <Stack className="absolute bottom-[27%] 3xl:h-[1102px] h-[1223px] lg:h-[714px] xl:h-[816px] 2xl:h-[918px] top-[29%] w-[100%]">
            <Column
              className="common-pointer absolute justify-start w-[100%]"
              onClick={handleNavigate1}
            >
              <div className="bg-blue_800 lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[547px] xl:ml-[1006px] 2xl:ml-[1131px] 3xl:ml-[1357px] ml-[1508px] lg:ml-[879px] rounded-radius2735 w-[21%]"></div>
              <div className="bg-blue_800 lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[547px] xl:mr-[1039px] 2xl:mr-[1169px] 3xl:mr-[1403px] mr-[1558px] lg:mr-[908px] 3xl:mt-[116px] mt-[129px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[96px] rounded-radius2735 w-[19%]"></div>
            </Column>
            <Row className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[6%] w-[84%]">
              <Stack className="lg:h-[549px] xl:h-[628px] 2xl:h-[707px] 3xl:h-[848px] h-[941px] outline outline-[0.4px] outline-gray_504 rotate-[-5deg] rounded-radius794 shadow-bs13 w-[75%]">
                <Column
                  className="absolute bg-cover bg-repeat items-start justify-start lg:pb-[36px] xl:pb-[42px] 2xl:pb-[47px] 3xl:pb-[56px] pb-[63px] lg:pr-[36px] xl:pr-[42px] 2xl:pr-[47px] 3xl:pr-[56px] pr-[63px] right-[0] w-[100%]"
                  style={{ backgroundImage: "url('images/.png')" }}
                >
                  <Row className="bg-gray_50 items-start justify-start lg:mb-[435px] xl:mb-[497px] 2xl:mb-[559px] 3xl:mb-[671px] mb-[746px] p-[11px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7.94px] rounded-tr-[7.94px] w-[100%]">
                    <Image
                      src={"images/img_windowcontrols.png"}
                      className="2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] lg:mt-[51px] xl:mt-[59px] 2xl:mt-[66px] 3xl:mt-[80px] mt-[89px] object-contain w-[4%]"
                      alt="WindowControls"
                    />
                    <Image
                      src={"images/img_lefticonset.png"}
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] object-contain w-[7%]"
                      alt="LeftIconSet"
                    />
                    <Image
                      src={"images/img_shield.png"}
                      className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[9px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[152px] ml-[169px] lg:ml-[98px] lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] mt-[65px] object-contain w-[1%]"
                      alt="Shield"
                    />
                    <Column className="bg-gray_200 items-center justify-start ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] my-[25px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius477 w-[40%]">
                      <Image
                        src={"images/img_clockwisearrow.png"}
                        className="h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] object-contain w-[2%]"
                        alt="ClockwiseArrow"
                      />
                      <Row className="items-start justify-center 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] mt-[0] w-[30%]">
                        <Text className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-[9.53px] text-gray_501 tracking-ls1 w-[auto]">
                          􀎡
                        </Text>
                        <Text className="font-medium xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] 3xl:text-[10px] text-[11.12px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_801 w-[auto]">
                          dribbble.com/sashalazar
                        </Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_righticonset.png"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[83px] lg:ml-[150px] xl:ml-[172px] 2xl:ml-[193px] 3xl:ml-[232px] ml-[258px] object-contain w-[7%]"
                      alt="RightIconSet"
                    />
                  </Row>
                </Column>
                <Column className="absolute bg-white_A700 font-roboto inset-x-[0] items-center justify-start rounded-bl-[7.94px] rounded-br-[7.94px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Stack className="bg-gray_50 lg:h-[525px] xl:h-[601px] 2xl:h-[676px] 3xl:h-[811px] h-[900px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] pt-[6px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] px-[6px] rounded-bl-[7.94px] rounded-br-[7.94px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Stack className="absolute lg:h-[481px] xl:h-[550px] 2xl:h-[618px] 3xl:h-[742px] h-[823px] w-[96%]">
                      <Stack className="absolute lg:h-[481px] xl:h-[550px] 2xl:h-[618px] 3xl:h-[742px] h-[823px] w-[100%]">
                        <div className="absolute bg-blue_800 lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90px] rotate-[-90deg] w-[100%]"></div>
                        <Column className="absolute bg-gray_50 items-center justify-center left-[0] outline outline-[0.395px] outline-blue_800 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] p-[46px] rounded-bl-[31.77px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] w-[23%]">
                          <Row className="items-start justify-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[42%]">
                            <Image
                              src={"images/img_vector_38.png"}
                              className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] h-[14px] lg:h-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] object-contain 2xl:w-[10px] 3xl:w-[12px] w-[14px] lg:w-[8px] xl:w-[9px]"
                              alt="Vector"
                            />
                            <Text className="font-normal xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic 3xl:text-[11px] text-[12.71px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_900_cc w-[auto]">
                              Home
                            </Text>
                          </Row>
                          <Row className="bg-blue_800 items-start justify-end lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] rounded-bl-[15.89px] rounded-br-[0] rounded-tl-[15.89px] rounded-tr-[0] w-[84%]">
                            <Image
                              src={"images/img_suitcasesimple_11.png"}
                              className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[15px] 3xl:w-[18px] w-[21px]"
                              alt="SuitcaseSimple"
                            />
                            <Text className="font-bold lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] 3xl:mr-[10px] mr-[12px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] mt-[1px] 3xl:text-[11px] text-[12.71px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-white_A700 w-[auto]">
                              Interview
                            </Text>
                          </Row>
                          <Row className="items-start justify-end lg:mb-[296px] xl:mb-[338px] 2xl:mb-[381px] 3xl:mb-[457px] mb-[508px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[52%]">
                            <Image
                              src={"images/img_gear_13.png"}
                              className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] mt-[1px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[15px] 3xl:w-[18px] w-[21px]"
                              alt="Gear"
                            />
                            <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] not-italic 3xl:text-[11px] text-[12.71px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_900_b2 w-[auto]">
                              Settings
                            </Text>
                          </Row>
                        </Column>
                      </Stack>
                      <Column className="absolute items-start justify-start left-[21%] top-[13%] w-[37%]">
                        <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-[25.42px] text-gray_900 w-[auto]">
                          Scheduled interview
                        </Text>
                        <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] outline outline-[0.395px] outline-blue_800 lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] p-[28px] rounded-radius1589 w-[99%]">
                          <Stack className="xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] h-[156px] lg:h-[91px] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] 3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] w-[41%]">
                            <Image
                              src={"images/img_rectangle89_4.png"}
                              className="absolute 2xl:h-[100px] 3xl:h-[120px] h-[133px] lg:h-[78px] xl:h-[89px] object-cover rounded-radius1589 w-[100%]"
                              alt="Rectangle89"
                            />
                            <Text className="absolute font-normal not-italic right-[28%] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900_93 w-[auto]">
                              Virtual
                            </Text>
                          </Stack>
                          <Column className="items-start justify-start mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] w-[45%]">
                            <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                              Daniel james
                            </Text>
                            <Text className="font-normal ml-[1px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                              Product designer
                            </Text>
                            <Text className="font-normal lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                              22/04/2022
                            </Text>
                            <Button className="bg-blue_800 font-bold lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15px] lg:py-[8px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[94%]">
                              View bio
                            </Button>
                          </Column>
                        </Row>
                        <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-[25.42px] text-gray_900 w-[auto]">
                          Schedule new interview
                        </Text>
                      </Column>
                    </Stack>
                    <Column className="absolute bottom-[7%] justify-start right-[5%] w-[72%]">
                      <Row className="items-start justify-end ml-[auto] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] outline outline-[0.395px] outline-blue_800 lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] p-[31px] rounded-radius1589 w-[49%]">
                        <Stack className="xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] h-[155px] lg:h-[91px] mb-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[42%]">
                          <Image
                            src={"images/img_rectangle89_5.png"}
                            className="absolute 2xl:h-[100px] 3xl:h-[120px] h-[133px] lg:h-[78px] xl:h-[89px] object-cover rounded-radius1589 w-[100%]"
                            alt="Rectangle89"
                          />
                          <Text className="absolute font-normal not-italic right-[23%] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900_93 w-[auto]">
                            Physical
                          </Text>
                        </Stack>
                        <Column className="items-start justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] w-[46%]">
                          <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                            Joy Felix
                          </Text>
                          <Text className="font-normal ml-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                            Front-end Dev
                          </Text>
                          <Text className="font-normal xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                            22/04/2022
                          </Text>
                          <Button className="bg-blue_800 font-bold lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15px] lg:py-[8px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[95%]">
                            View bio
                          </Button>
                        </Column>
                      </Row>
                      <PagerIndicator
                        className="h-[24px] lg:ml-[219px] xl:ml-[250px] 2xl:ml-[282px] 3xl:ml-[338px] ml-[376px] lg:mr-[240px] xl:mr-[274px] 2xl:mr-[309px] 3xl:mr-[371px] mr-[412px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[auto]"
                        count={3}
                        activeCss="inline-block cursor-pointer w-[20.5px] h-[20.5px] bg-blue_800"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[20.5px] h-[20.5px] outline-blue_800 outline-[0.395px] outline"
                        selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                        unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
                      />
                      <Row className="items-start justify-between lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[100%]">
                        <Stack className="lg:h-[162px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[250px] h-[277px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[49%]">
                          <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[86%]">
                            <Column className="items-end justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] pr-[25px] w-[52%]">
                              <Image
                                src={"images/img_rectangle89_6.png"}
                                className="3xl:h-[116px] h-[128px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] mr-[1px] object-contain rounded-radius1589 w-[98%]"
                                alt="Rectangle89"
                              />
                              <SelectBox
                                className="bg-white_A700 font-normal mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] 2xl:pb-[11px] 3xl:pb-[13px] pb-[15px] lg:pb-[8px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[25px] 2xl:pt-[12px] 3xl:pt-[14px] pt-[16px] lg:pt-[9px] xl:py-[10px] rounded-radius794 shadow-bs14 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[91%]"
                                placeholderClassName="bg-transparent text-gray_900"
                                name="Group33"
                                placeholder="Virtual"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Image
                                    src={"images/img_vector_39.png"}
                                    className="w-[14.19px] h-[7.43px] mr-[9px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[5px] xl:w-[9px] xl:h-[5px] xl:mr-[6px] 2xl:w-[10px] 2xl:h-[6px] 2xl:mr-[6px] 3xl:w-[12px] 3xl:h-[7px] 3xl:mr-[8px]"
                                    alt="Vector"
                                  />
                                }
                              ></SelectBox>
                            </Column>
                            <Column className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] w-[48%]">
                              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                                Victor Braman
                              </Text>
                              <Text className="font-normal ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                                Back-end Dev
                              </Text>
                              <Text className="bg-white_A700 font-normal leading-[normal] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[15px] pb-[17px] lg:pb-[9px] lg:pl-[11px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[17px] pl-[19px] xl:pt-[4px] lg:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] pt-[7px] rounded-radius794 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 text-left text-shadow-ts w-[87%]">
                                22/04/2022
                              </Text>
                              <Button className="bg-blue_800 font-bold ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] py-[15px] lg:py-[8px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[94%]">
                                Schedule
                              </Button>
                            </Column>
                          </Row>
                          <Stack className="absolute lg:h-[162px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[250px] h-[277px] outline outline-[0.395px] outline-blue_800 lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] p-[8px] rounded-radius1589 w-[100%]">
                            <Image
                              src={"images/img_plus_9.png"}
                              className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] object-contain right-[4%] w-[7%]"
                              alt="Plus"
                            />
                          </Stack>
                        </Stack>
                        <Stack className="lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] h-[272px] lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] xl:pr-[2px] lg:pr-[2px] 3xl:pr-[3px] 2xl:pr-[3px] pr-[4px] w-[49%]">
                          <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[87%]">
                            <Column className="items-end justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] pr-[25px] w-[51%]">
                              <Image
                                src={"images/img_rectangle89_7.png"}
                                className="3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] mr-[1px] object-contain rounded-radius1589 w-[99%]"
                                alt="Rectangle89"
                              />
                              <SelectBox
                                className="bg-white_A700 font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] xl:pb-[9px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[25px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] pt-[15px] lg:py-[8px] rounded-radius794 shadow-bs14 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[92%]"
                                placeholderClassName="bg-transparent text-gray_900"
                                name="Group33"
                                placeholder="Virtual"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Image
                                    src={"images/img_vector_40.png"}
                                    className="w-[14.08px] h-[7.3px] mr-[12px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[7px] xl:w-[9px] xl:h-[5px] xl:mr-[8px] 2xl:w-[10px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[12px] 3xl:h-[7px] 3xl:mr-[10px]"
                                    alt="Vector"
                                  />
                                }
                              ></SelectBox>
                            </Column>
                            <Column className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] w-[49%]">
                              <Text className="font-bold lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                                John Doe
                              </Text>
                              <Text className="font-normal lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                                Snr Product designer
                              </Text>
                              <Column className="bg-white_A700 items-start justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius794 shadow-bs14 w-[83%]">
                                <Text className="font-normal 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.06px] text-gray_900 w-[auto]">
                                  22/04/2022
                                </Text>
                              </Column>
                              <Column className="bg-blue_800 items-center justify-start ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] rounded-radius10 w-[91%]">
                                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                                  Schedule
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                          <Stack className="absolute lg:h-[159px] xl:h-[182px] 2xl:h-[205px] 3xl:h-[245px] h-[272px] outline outline-[0.395px] outline-blue_800 xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px] rounded-radius1589 w-[100%]">
                            <Image
                              src={"images/img_plus_10.png"}
                              className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] object-contain right-[4%] w-[7%]"
                              alt="Plus"
                            />
                          </Stack>
                        </Stack>
                      </Row>
                    </Column>
                    <Stack className="absolute bg-white_A700 3xl:h-[111px] h-[123px] lg:h-[72px] xl:h-[83px] 2xl:h-[93px] left-[5%] pr-[0] top-[2%] w-[85%]">
                      <Stack className="absolute 3xl:h-[111px] h-[123px] lg:h-[72px] xl:h-[83px] 2xl:h-[93px] right-[0] w-[100%]">
                        <div className="absolute bg-white_A700 3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] w-[100%]"></div>
                        <Image
                          src={"images/img_logo_16.png"}
                          className="absolute lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] h-[49px] object-contain w-[4%]"
                          alt="Logo"
                        />
                      </Stack>
                      <Row className="absolute items-start justify-start pr-[1px] pt-[1px] top-[3%] w-[40%]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
                          WrapClassName="2xl:mt-[6px] 2xl:pb-[10px] 2xl:pl-[12px] 2xl:pr-[11px] 2xl:pt-[18px] 3xl:mt-[7px] 3xl:pb-[12px] 3xl:pl-[14px] 3xl:pr-[13px] 3xl:pt-[21px] bg-gray_200 flex lg:mt-[4px] lg:pb-[8px] lg:pl-[9px] lg:pr-[8px] lg:pt-[14px] mt-[8px] pb-[14px] pl-[16px] pr-[15px] pt-[24px] rounded-radius1589 w-[50%] xl:mt-[5px] xl:pb-[9px] xl:pt-[16px] xl:px-[10px]"
                          name="Frame117"
                          placeholder="Search"
                          suffix={
                            <Image
                              onClick={() => setInputvalue("")}
                              src={
                                inputvalue?.length
                                  ? "images/close13.svg"
                                  : "images/img_magnifyingglass_14.png"
                              }
                              className="cursor-pointer w-[20.5px] h-[20.5px] lg:w-[11px] lg:h-[12px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px] my-[auto]"
                              alt="MagnifyingGlass"
                            />
                          }
                        ></Input>
                        <Button className="bg-gray_200 flex lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] h-[33px] items-center justify-center lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius1655 lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px] w-[33px]">
                          <Image
                            src={"images/img_group5_16.png"}
                            className="w-[21.16px] h-[21.16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[19px] 3xl:h-[20px]"
                            alt="Group5"
                          />
                        </Button>
                        <Stack className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[8%]">
                          <Button className="absolute bg-gray_200 flex lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] h-[33px] items-center justify-center xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] p-[4px] rounded-radius1655 w-[100%]">
                            <Image
                              src={"images/img_group340.png"}
                              className="w-[21.16px] h-[21.16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[19px] 3xl:h-[20px]"
                              alt="Group340"
                            />
                          </Button>
                          <Text className="absolute bg-red_A701 font-normal lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] not-italic lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] pl-[5px] lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] pr-[6px] py-[1px] right-[3%] rounded-radius828 lg:text-[5px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-[9.23px] text-white_A700 w-[auto]">
                            3
                          </Text>
                        </Stack>
                        <Image
                          src={"images/img_ellipse18_1.png"}
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] h-[33px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] object-contain rounded-radius50 w-[auto]"
                          alt="Ellipse18"
                        />
                        <Image
                          src={"images/img_vector_41.png"}
                          className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain w-[3%]"
                          alt="Vector"
                        />
                      </Row>
                    </Stack>
                  </Stack>
                </Column>
              </Stack>
              <Stack
                className="bg-cover bg-repeat lg:h-[401px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] h-[686px] xl:mb-[113px] 2xl:mb-[127px] 3xl:mb-[153px] mb-[170px] lg:mb-[99px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[48px] ml-[54px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] mt-[85px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[21%]"
                style={{ backgroundImage: "url('images/img_group367.png')" }}
              >
                <Image
                  src={"images/img_addimage.png"}
                  className="absolute lg:h-[383px] xl:h-[438px] 2xl:h-[493px] 3xl:h-[591px] h-[656px] inset-[0] justify-center m-[auto] object-contain w-[96%]"
                  alt="addimage"
                />
                <Image
                  src={"images/img_group56_1.png"}
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[18px] inset-x-[0] mx-[auto] object-contain w-[53%]"
                  alt="Group56"
                />
              </Stack>
            </Row>
          </Stack>
          <Stack className="absolute bottom-[38%] font-roboto lg:h-[198px] xl:h-[226px] 2xl:h-[254px] 3xl:h-[305px] h-[338px] right-[28%] rotate-[-16deg] rounded-radius47 w-[15%]">
            <div className="absolute bg-blue_800 lg:h-[193px] xl:h-[221px] 2xl:h-[248px] 3xl:h-[298px] h-[330px] inset-[0] justify-center m-[auto] rounded-radius2176 w-[99%]"></div>
            <Column className="absolute bg-white_A700 h-[max-content] inset-[0] items-end justify-center m-[auto] outline outline-[0.27px] outline-blue_800 xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] p-[17px] lg:p-[9px] rounded-radius2176 shadow-bs15 w-[99%]">
              <Stack className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[55%]">
                <Image
                  src={"images/img_image2_2.png"}
                  className="absolute h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] object-contain rounded-radius5378 w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="image2"
                />
                <Text className="absolute bottom-[1%] font-bold inset-x-[0] mx-[auto] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[17.41px] text-gray_900 w-[max-content]">
                  Edet John-Smith
                </Text>
              </Stack>
              <Text className="font-medium lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] mr-[78px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-gray_900 w-[auto]">
                Senior product designer
              </Text>
              <Column className="items-start justify-start lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] mr-[49px] w-[78%]">
                <Stack className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] ml-[1px] w-[99%]">
                  <Column className="absolute justify-start w-[100%]">
                    <Text className="font-bold lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] ml-[70px] lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] mr-[36px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-gray_900 w-[auto]">
                      10 Years Experience
                    </Text>
                    <Text className="font-normal leading-[normal] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-center text-gray_900 w-[100%]">
                      Edet is is a vastly learned product designer with dream to
                      pass down his knowledge to younger generation ...
                    </Text>
                  </Column>
                  <Stack className="absolute lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[61px] right-[3%] w-[82%]">
                    <Row className="absolute items-start justify-between w-[100%]">
                      <Column className="items-center justify-start lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] outline outline-[0.27px] outline-blue_800 lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] p-[6px] rounded-radius544 w-[37%]">
                        <Text className="font-normal leading-[normal] mb-[0] not-italic xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-center text-gray_900 w-[85%]">
                          Facebook
                        </Text>
                      </Column>
                      <Button className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic outline outline-[0.27px] outline-blue_800 lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] rounded-radius544 xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-center text-gray_900 w-[26%]">
                        Meta
                      </Button>
                    </Row>
                    <Text className="absolute bottom-[18%] font-normal leading-[normal] not-italic outline outline-[0.27px] outline-blue_800 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[16px] lg:pb-[9px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] pt-[6px] lg:px-[5px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] px-[9px] right-[26%] rounded-radius544 xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-center text-gray_900 w-[37%]">
                      Microsoft
                    </Text>
                  </Stack>
                </Stack>
                <Column className="bg-blue_800 items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] p-[22px] rounded-radius544 shadow-bs16 w-[90%]">
                  <Text className="font-bold leading-[normal] lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.7px] text-left text-white_A700 w-[55%]">
                    Schedule Session
                  </Text>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Stack
            className="absolute bg-cover bg-repeat font-inter lg:h-[534px] xl:h-[611px] 2xl:h-[687px] 3xl:h-[824px] h-[915px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group342.png')" }}
          >
            <header className="absolute w-[100%]">
              <Row className="bg-gray_900_99 items-center justify-start lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] w-[100%]">
                <Image
                  src={"images/img_whiteinnotals_11.png"}
                  className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] object-contain w-[9%]"
                  alt="WHiteInnotals"
                />
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] ml-[263px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Home
                </Text>
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                  Events
                </Text>
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                  Blogs
                </Text>
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                  About us
                </Text>
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 hover:text-white_A700 w-[auto]">
                  Contact
                </Text>
                <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] ml-[264px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Hire Talent
                </Text>
                <Button className="bg-blue_800 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[9%]">
                  Sign up
                </Button>
              </Row>
            </header>
            <Image
              src={"images/img_vector1_10.png"}
              className="absolute lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] left-[23%] object-contain top-[43%] w-[19%]"
              alt="Vector1"
            />
            <Column className="absolute bg-gray_900_68 items-center justify-end 2xl:p-[100px] 3xl:p-[120px] p-[134px] lg:p-[78px] xl:p-[89px] w-[100%]">
              <Text className="font-inter font-normal lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] lg:text-[52px] xl:text-[60px] 2xl:text-[67px] 3xl:text-[81px] text-[90px] text-white_A700 w-[auto]">
                We accelerate innovative talents
              </Text>
              <Text className="font-inter font-medium lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] mt-[52px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A700 w-[auto]">
                Build your innovation and engineering team withinnotal
              </Text>
              <Text className="font-medium font-ubuntu leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[62%]">
                <span className="text-white_A700 font-bold">Innotals</span>
                <span className="text-white_A700 font-normal">
                  {" "}
                  is africa’s best talent accelerator providing world-class
                  talents <br />
                  with
                </span>
                <span className="text-white_A700"> </span>
                <span className="text-white_A700 font-bold">
                  exceptional soft skills
                </span>
              </Text>
              <Button className="bg-blue_800 font-bold font-inter lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 shadow-bs4 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[17%]">
                Join Innotals
              </Button>
            </Column>
          </Stack>
          <Row className="absolute bg-white_A700 font-inter inset-x-[0] items-start justify-start mx-[auto] lg:p-[30px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] p-[53px] w-[99%]">
            <Column className="items-start justify-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[45px] mb-[51px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] ml-[78px] lg:pr-[46px] xl:pr-[53px] 2xl:pr-[60px] 3xl:pr-[72px] pr-[80px] w-[46%]">
              <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 w-[auto]">
                Our Focus
              </Text>
              <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[25%]"></div>
              <Image
                src={"images/img_rectangle154_1.png"}
                className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] object-contain rounded-radius20 w-[100%]"
                alt="Rectangle154"
              />
            </Column>
            <Column className="font-ubuntu items-start justify-start lg:mb-[145px] xl:mb-[166px] 2xl:mb-[187px] 3xl:mb-[225px] mb-[250px] lg:mt-[241px] xl:mt-[276px] 2xl:mt-[310px] 3xl:mt-[372px] mt-[414px] w-[31%]">
              <Text className="font-medium leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[100%]">
                Building a tribe of self-motivated and <br />
                innovative talents to build products, <br />
                drive engineering, research and <br />
                innovations for organzatons
              </Text>
              <Row className="items-end justify-start lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69px] w-[48%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-blue_800 w-[auto]">
                  Find out more
                </Text>
                <Image
                  src={"images/img_arrowright_2.png"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] object-contain w-[12%]"
                  alt="ArrowRight"
                />
              </Row>
            </Column>
          </Row>
        </Stack>
        <Column className="font-inter items-end xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] lg:px-[101px] xl:px-[116px] 2xl:px-[130px] 3xl:px-[156px] px-[174px] w-[100%]">
          <Row className="items-start justify-end w-[94%]">
            <Column className="items-start justify-start lg:mb-[32px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] mb-[55px] lg:mt-[208px] xl:mt-[238px] 2xl:mt-[267px] 3xl:mt-[321px] mt-[357px] 3xl:pr-[103px] pr-[115px] lg:pr-[67px] xl:pr-[76px] 2xl:pr-[86px] w-[47%]">
              <Text className="font-medium leading-[130.00%] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left tracking-ls1 w-[100%]">
                <span className="text-gray_900_99 font-ubuntu">Our</span>
                <span className="text-gray_900_99 font-ubuntu font-bold">
                  {" "}
                </span>
                <span className="text-gray_900_bf font-ubuntu font-bold">
                  project-based learning
                </span>
                <span className="text-gray_900_99 font-ubuntu">
                  {" "}
                  model <br />
                  connects talents and interns to <br />
                  on-going practical mentorship which <br />
                  enables them to fast track skills <br />
                  development, incease project <br />
                  experience,build effective team <br />
                  interaction virtually and develop <br />
                  soft skills, improve portfolio, and <br />
                  better position them for opportuities
                </span>
              </Text>
              <Button className="bg-blue_800 font-bold lg:mt-[39px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] mt-[67px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[58%]">
                Join Accelerator
              </Button>
            </Column>
            <Column className="items-start justify-start w-[53%]">
              <Text className="font-bold leading-[normal] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 text-left w-[100%]">
                Grow, Get opportunities, <br />
                secure your future
              </Text>
              <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[34%]"></div>
              <Image
                src={"images/img_rectangle201_1.png"}
                className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] object-contain rounded-radius20 w-[97%]"
                alt="Rectangle201"
              />
            </Column>
          </Row>
        </Column>
        <Column className="font-inter items-start lg:mt-[134px] xl:mt-[154px] 2xl:mt-[173px] 3xl:mt-[208px] mt-[231px] 3xl:px-[115px] px-[128px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="items-start justify-start w-[86%]">
            <Column className="items-start justify-start lg:pr-[46px] xl:pr-[52px] 2xl:pr-[59px] 3xl:pr-[71px] pr-[79px] w-[59%]">
              <Text className="font-bold leading-[normal] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 text-left w-[98%]">
                Build an innovation and <br />
                delivery minded team
              </Text>
              <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[35%]"></div>
              <Image
                src={"images/img_rectangle202.png"}
                className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] object-contain rounded-radius20 w-[100%]"
                alt="Rectangle202"
              />
            </Column>
            <Column className="items-start justify-start lg:mb-[45px] xl:mb-[52px] 2xl:mb-[58px] 3xl:mb-[70px] mb-[78px] lg:mt-[239px] xl:mt-[274px] 2xl:mt-[308px] 3xl:mt-[370px] mt-[411px] w-[41%]">
              <Text className="font-medium leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[100%]">
                <span className="text-gray_900_99 font-ubuntu">
                  We have observed the challenges of <br />
                  virtual teams and talents, seen the soft <br />
                  skill gap, the shortage in experience <br />
                  and challenges with productivity.
                  <br />
                  Build a team not only interested in the
                  <br />
                  coding but deeply passionate in solving <br />
                  problems and with balanced skillset <br />
                  to deliver{" "}
                </span>
                <span className="text-gray_900_99 font-ubuntu font-bold">
                  result
                </span>
              </Text>
              <Button className="bg-blue_800 font-bold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[45%]">
                Hire Talents
              </Button>
            </Column>
          </Row>
        </Column>
        <Row className="font-inter items-start justify-center lg:mt-[149px] xl:mt-[171px] 2xl:mt-[192px] 3xl:mt-[231px] mt-[257px] w-[76%]">
          <Column className="items-start justify-start lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] lg:mt-[214px] xl:mt-[245px] 2xl:mt-[276px] 3xl:mt-[331px] mt-[368px] 2xl:pr-[107px] 3xl:pr-[128px] pr-[143px] lg:pr-[83px] xl:pr-[95px] w-[48%]">
            <Text className="font-medium font-ubuntu leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_900_99 text-left w-[100%]">
              Not just for underrepresentation, but
              <br />
              for the high intelligence,commitment
              <br />
              to learning, effective delivery and <br />
              dliberate growth efforts, we train <br />
              young girls in high school and <br />
              universities or colleges in STEM/Tech
              <br />
              skills. <br />
              Are you a young lady seeking a fresh
              <br />
              start or career in tech, here is your <br />
              place
            </Text>
            <Button className="bg-blue_800 font-bold font-inter lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[51%]">
              Join wiSTEM
            </Button>
          </Column>
          <Column className="items-start justify-start w-[52%]">
            <Text className="font-bold leading-[normal] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_900 text-left w-[85%]">
              We propel women in <br />
              STEM
            </Text>
            <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[35%]"></div>
            <Image
              src={"images/img_rectangle203.png"}
              className="lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] object-cover rounded-radius10 w-[100%]"
              alt="Rectangle203"
            />
          </Column>
        </Row>
        <Text className="font-bold font-inter leading-[normal] lg:mt-[157px] xl:mt-[180px] 2xl:mt-[202px] 3xl:mt-[243px] mt-[270px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-center text-gray_900 w-[78%]">
          Access our pool of accelerated or vetted <br />
          african tech, engineering and innovation Talents
        </Text>
        <div className="bg-blue_800 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] rounded-radius5 w-[14%]"></div>
        <Grid className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 lg:mt-[112px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[173px] mt-[193px] w-[79%]">
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-red_A701 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Back-End Engineers
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-blue_800 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] lg:mr-[8px] xl:mr-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Front-End Engineers
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-orange_A700 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Full Stack Engineers
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-green_900 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[43px] 2xl:ml-[48px] 3xl:ml-[58px] ml-[65px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Data Scientists
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-deep_orange_300 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Mobile engineer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-red_A701 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mr-[21px] xl:mr-[24px] 2xl:mr-[27px] 3xl:mr-[33px] mr-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              React Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-amber_A400 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] ml-[44px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Android Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-lime_A700_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mr-[29px] xl:mr-[34px] 2xl:mr-[38px] 3xl:mr-[45px] mr-[51px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              iOS Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-green_500 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              React Native Dev
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-red_900_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Python Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-orange_A700 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Node.Js Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-blue_800 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Javascript Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-red_A701 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Java Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-deep_purple_A201 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              C# Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-indigo_A700_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              UX/UI Developer
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-start 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-red_A100_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Research Assistant
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-pink_A400_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] mr-[16px] lg:mr-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              iOT & Embedded Sys
            </Text>
          </Row>
          <Row className="bg-white_A700 items-center justify-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-black_900_99 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_900_99 w-[auto]">
              Robotics Engineer
            </Text>
          </Row>
        </Grid>
        <Button className="bg-blue_800 font-bold font-inter mt-[103px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius10 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[12%]">
          Hire Now
        </Button>
        <Column className="bg-gray_900 font-inter items-center justify-start 3xl:mt-[119px] mt-[133px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] lg:p-[22px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] p-[39px] w-[100%]">
          <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
            News and Events
          </Text>
          <Row className="font-ubuntu items-start justify-start lg:mb-[55px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] mb-[95px] mt-[105px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[78px] 3xl:mt-[94px] w-[90%]">
            <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] 3xl:mb-[110px] mb-[123px] lg:mb-[71px] xl:mb-[82px] 2xl:mb-[92px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]">
              <Image
                src={"images/img_vector_42.png"}
                className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] inset-y-[0] left-[35%] my-[auto] object-contain w-[25%]"
                alt="Vector"
              />
              <div className="absolute border-bw3 border-solid border-white_A700 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"></div>
            </Stack>
            <Image
              src={"images/img_rectangle3429.png"}
              className="lg:h-[164px] xl:h-[188px] 2xl:h-[211px] 3xl:h-[254px] h-[281px] lg:ml-[128px] xl:ml-[147px] 2xl:ml-[165px] 3xl:ml-[199px] ml-[221px] object-contain rounded-radius10 w-[24%]"
              alt="Rectangle3429"
            />
            <Column className="items-start justify-start lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] mb-[72px] 3xl:ml-[106px] ml-[118px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] lg:pr-[53px] xl:pr-[60px] 2xl:pr-[68px] 3xl:pr-[81px] pr-[91px] w-[39%]">
              <Text className="font-normal leading-[normal] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-left text-white_A700 w-[100%]">
                One day workshop for grooming talent
                <br />
                to be self-reliant
              </Text>
              <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-white_A700 w-[auto]">
                24th june 2022
              </Text>
              <Text className="font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-white_A700 w-[auto]">
                Lekki Lagos
              </Text>
            </Column>
            <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] 3xl:mb-[110px] mb-[123px] lg:mb-[71px] xl:mb-[82px] 2xl:mb-[92px] 3xl:ml-[106px] ml-[118px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]">
              <Image
                src={"images/img_vector_43.png"}
                className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] inset-y-[0] my-[auto] object-contain right-[35%] w-[25%]"
                alt="Vector"
              />
              <div className="absolute border-bw3 border-solid border-white_A700 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] rotate-[-180deg] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"></div>
            </Stack>
          </Row>
        </Column>
        <Column className="bg-gray_900 items-center justify-start lg:mt-[117px] xl:mt-[134px] 2xl:mt-[150px] 3xl:mt-[181px] mt-[201px] lg:p-[33px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] p-[57px] w-[87%]">
          <Line className="bg-gray_51 h-[88px] w-[6%]" />
          <Text className="font-inter font-normal lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-gray_51 w-[auto]">
            Subscribe to our Newsletter
          </Text>
          <Text className="font-normal font-ubuntu lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] leading-[40.00px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_51 w-[40%]">
            To be the first to get notified on upcoming events and the release
            of our newsletters.
          </Text>
          <Column className="font-ubuntu items-start justify-start lg:mb-[44px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] mb-[76px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] w-[87%]">
            <Text className="font-medium ml-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_50_70 w-[auto]">
              EMAIL ADDRESS
            </Text>
            <Row className="items-center justify-between 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
              <Column className="border-bw3 border-solid border-white_A700 items-start lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] p-[36px] rounded-radius10 w-[71%]">
                <Text className="font-normal xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_50_d6 w-[auto]">
                  abayomi.tosin2017@gmail.com
                </Text>
              </Column>
              <Column className="bg-white_A700 font-inter items-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] p-[48px] rounded-radius10 w-[27%]">
                <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-gray_901 w-[auto]">
                  Subscribe
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
        <footer className="bg-gray_900 lg:mt-[130px] xl:mt-[149px] 2xl:mt-[168px] 3xl:mt-[201px] mt-[224px] w-[100%]">
          <Column className="justify-start 3xl:ml-[115px] ml-[128px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] xl:mr-[114px] 2xl:mr-[128px] 3xl:mr-[153px] mr-[171px] lg:mr-[99px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[81px] w-[84%]">
            <Image
              src={"images/img_whiteinnotals_12.png"}
              className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 2xl:mr-[1012px] 3xl:mr-[1214px] mr-[1349px] lg:mr-[786px] xl:mr-[900px] object-contain w-[17%]"
              alt="WHiteInnotals"
            />
            <Column className="items-start justify-start lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] mt-[59px] w-[65%]">
              <Row className="font-inter items-center justify-start w-[68%]">
                <Text className="font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                  Resources
                </Text>
                <Text className="font-bold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[73px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                  Companies
                </Text>
                <Text className="font-bold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-white_A700 w-[auto]">
                  Contact
                </Text>
              </Row>
              <Row className="font-ubuntu items-start justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] w-[81%]">
                <Text className="font-bold lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  About us
                </Text>
                <Text className="font-bold lg:ml-[103px] xl:ml-[118px] 2xl:ml-[132px] 3xl:ml-[159px] ml-[177px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Companies
                </Text>
                <Image
                  src={"images/img_vector_44.png"}
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] ml-[158px] lg:ml-[92px] object-contain w-[5%]"
                  alt="Vector"
                />
                <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  innotals@gmail.com
                </Text>
              </Row>
              <Row className="font-ubuntu items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[73%]">
                <Text className="font-bold lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Terms of service
                </Text>
                <Text className="font-bold lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[29px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] ml-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Collaborate with us
                </Text>
                <Image
                  src={"images/img_vector_45.png"}
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[36px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] object-contain w-[5%]"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_46.png"}
                  className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] mb-[0] lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[43px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] object-contain w-[5%]"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_47.png"}
                  className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] h-[37px] mb-[0] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] object-contain lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px] w-[37px]"
                  alt="Vector"
                />
              </Row>
              <Text className="font-bold font-ubuntu 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                FAQ
              </Text>
              <Text className="font-bold font-inter lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-white_A700 w-[auto]">
                Subscribe to our newsletter
              </Text>
              <Input
                className="bg-transparent border-0 font-bold font-inter 3xl:pb-[21px] pb-[24px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pl-[30px] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] 3xl:pt-[22px] pt-[25px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-white_A700_ad text-white_A700_ad w-[100%]"
                WrapClassName="2xl:ml-[420px] 2xl:mt-[24px] 3xl:ml-[504px] 3xl:mt-[28px] lg:ml-[326px] lg:mt-[18px] ml-[560px] mt-[32px] outline outline-[1px] outline-white_A700 rounded-radius5 w-[47%] xl:ml-[373px] xl:mt-[21px]"
                name="Group345"
                placeholder="Enter email address"
              ></Input>
              <Button className="bg-blue_800 font-bold font-inter lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] ml-[560px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] 2xl:py-[10px] 3xl:py-[12px] py-[14px] lg:py-[8px] xl:py-[9px] rounded-radius10 shadow-bs4 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[16%]">
                Subscribe
              </Button>
            </Column>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default LandingpagehomePage;
