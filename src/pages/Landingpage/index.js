import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  Line,
  Slider,
  PagerIndicator,
  SelectBox,
  Input,
  List,
} from "components";

const LandingpagePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] outline outline-[8px] outline-red_A700 w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-gray_901 items-center justify-end lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] p-[9px] w-[100%]">
            <Image
              src={"images/img_whiteinnotals_9.png"}
              className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] h-[70px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] object-contain w-[8%]"
              alt="WHiteInnotals"
            />
            <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] ml-[263px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
              Home
            </Text>
            <Text className="cursor-pointer hover:font-bold font-normal lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] hover:text-white_A700 text-white_A700_cc w-[auto]">
              Events
            </Text>
            <Text className="cursor-pointer hover:font-bold font-normal lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] hover:text-white_A700 text-white_A700_cc w-[auto]">
              Blogs
            </Text>
            <Text className="cursor-pointer hover:font-bold font-normal lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] hover:text-white_A700 text-white_A700_cc w-[auto]">
              About us
            </Text>
            <Text className="cursor-pointer hover:font-bold font-normal lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] hover:text-white_A700 text-white_A700_cc w-[auto]">
              Contact
            </Text>
            <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[31px] lg:ml-[154px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[237px] ml-[264px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
              Hire Talent
            </Text>
            <Button className="bg-gray_500 font-bold xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] 3xl:mr-[103px] mr-[115px] lg:mr-[67px] xl:mr-[76px] 2xl:mr-[86px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[9%]">
              Sign up
            </Button>
          </Row>
        </header>
        <Column className="bg-gray_500 items-center justify-end mt-[1px] lg:p-[50px] xl:p-[57px] 2xl:p-[64px] 3xl:p-[77px] p-[86px] w-[100%]">
          <Text className="font-inter font-normal 2xl:mt-[108px] 3xl:mt-[130px] mt-[145px] lg:mt-[84px] xl:mt-[96px] lg:text-[52px] xl:text-[60px] 2xl:text-[67px] 3xl:text-[81px] text-[90px] text-white_A700 w-[auto]">
            We accelerate innovative talents
          </Text>
          <Text className="font-inter font-medium xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-white_A700 w-[auto]">
            Build your innovation and engineering team with innotal
          </Text>
          <Text className="font-medium font-ubuntu leading-[normal] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[60%]">
            Innotals is africa’s best talent accelerator providing world-class
            talents <br />
            with exceptional soft skills
          </Text>
          <Row className="font-inter items-center justify-center 3xl:mt-[118px] mt-[132px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[32%]">
            <Button className="font-bold outline outline-[1px] outline-white_A700 lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] shadow-bs4 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[44%]">
              Hire Talent
            </Button>
            <Button className="bg-gray_901 font-bold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] shadow-bs4 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[49%]">
              Join Innotals
            </Button>
          </Row>
        </Column>
        <Row className="font-roboto items-start justify-start lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] w-[86%]">
          <Stack className="bg-gray_50 lg:h-[436px] xl:h-[499px] 2xl:h-[561px] 3xl:h-[673px] h-[747px] rounded-radius5703 shadow-bs6 w-[64%]">
            <Stack className="absolute lg:h-[415px] xl:h-[475px] 2xl:h-[534px] 3xl:h-[641px] h-[711px] inset-x-[0] mx-[auto] w-[97%]">
              <div className="absolute bg-gray_50 lg:h-[426px] xl:h-[488px] 2xl:h-[548px] 3xl:h-[658px] h-[730px] rounded-radius5703 shadow-bs6 w-[100%]"></div>
              <Line className="absolute bg-blue_800 h-[0] rotate-[-90deg] top-[7%] w-[1026px]" />
              <Column className="absolute bg-gray_50 items-start justify-center outline outline-[0.355px] outline-blue_800 lg:pl-[33px] xl:pl-[38px] 2xl:pl-[42px] 3xl:pl-[51px] pl-[57px] lg:py-[33px] xl:py-[38px] 2xl:py-[42px] 3xl:py-[51px] py-[57px] rounded-bl-[28.52px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] w-[18%]">
                <Row className="items-center justify-end lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] w-[51%]">
                  <Image
                    src={"images/img_vector_32.png"}
                    className="2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] my-[0] object-contain 3xl:w-[10px] w-[12px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] not-italic 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900_cc w-[auto]">
                    Home
                  </Text>
                </Row>
                <Button
                  className="2xl:mt-[10px] 2xl:pl-[12px] 2xl:pr-[17px] 2xl:py-[9px] 3xl:mt-[12px] 3xl:pl-[15px] 3xl:pr-[20px] 3xl:py-[11px] bg-blue_800 flex items-center justify-between lg:mt-[8px] lg:pl-[9px] lg:pr-[13px] lg:py-[7px] mt-[14px] pl-[17px] pr-[23px] py-[13px] rounded-bl-[14.26px] rounded-br-[0] rounded-tl-[14.26px] rounded-tr-[0] text-center w-[100%] xl:mt-[9px] xl:pl-[11px] xl:pr-[15px] xl:py-[8px]"
                  leftIcon={
                    <Image
                      src={"images/img_suitcasesimple_10.png"}
                      className="w-[17.66px] h-[17.66px] text-center lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[15px] 3xl:h-[16px]"
                      alt="SuitcaseSimple"
                    />
                  }
                >
                  <div className="bg-transparent font-bold 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700">
                    Interview
                  </div>
                </Button>
                <Row className="items-center justify-end lg:mb-[254px] xl:mb-[290px] 2xl:mb-[327px] 3xl:mb-[392px] mb-[436px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[63%]">
                  <Image
                    src={"images/img_gear_12.png"}
                    className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] h-[17px] object-contain xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] w-[17px] lg:w-[9px]"
                    alt="Gear"
                  />
                  <Text className="font-normal xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] my-[1px] not-italic 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
              </Column>
              <Column className="absolute bottom-[6%] items-start justify-start right-[5%] w-[74%]">
                <Text className="font-medium lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-[22.81px] text-gray_900 w-[auto]">
                  Scheduled interview
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  slidesToShow={2}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[99%]"
                  items={[...Array(6)].map(() => (
                    <>
                      <Row className="items-end justify-start 2xl:mx-[10px] 3xl:mx-[12px] mx-[14.26px] lg:mx-[8px] xl:mx-[9px] outline outline-[0.355px] outline-blue_800 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] rounded-radius1426">
                        <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[18px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] pr-[31px] w-[49%]">
                          <Image
                            src={"images/img_rectangle89.png"}
                            className="3xl:h-[100px] h-[110px] lg:h-[65px] xl:h-[74px] 2xl:h-[83px] object-contain rounded-radius1426 w-[99%]"
                            alt="Rectangle89"
                          />
                          <Text className="font-normal xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900_93 w-[auto]">
                            Virtual
                          </Text>
                        </Column>
                        <Column className="items-start justify-start my-[0] w-[42%]">
                          <Text className="font-bold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            Daniel james
                          </Text>
                          <Text className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            Product designer
                          </Text>
                          <Text className="font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            22/04/2022
                          </Text>
                          <Button className="bg-blue_800 font-bold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] py-[11px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[100%]">
                            View bio
                          </Button>
                        </Column>
                      </Row>
                    </>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer w-[17.11px] h-[17.11px] bg-blue_800" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer w-[17.11px] h-[17.11px] outline-blue_800 outline-[0.355px] outline"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="h-[17px] lg:ml-[201px] xl:ml-[230px] 2xl:ml-[259px] 3xl:ml-[311px] ml-[346px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[auto]"
                  count={3}
                  activeCss="inline-block cursor-pointer w-[17.11px] h-[17.11px] bg-blue_800"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer w-[17.11px] h-[17.11px] outline-blue_800 outline-[0.355px] outline"
                  sliderRef={sliderRef}
                  selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.28px] xl:mx-[2px]"
                  unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.28px] xl:mx-[2px]"
                />
                <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-[22.81px] text-gray_900 w-[auto]">
                  Schedule new interview
                </Text>
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]">
                  <Stack className="lg:h-[129px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[200px] h-[221px] w-[48%]">
                    <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[86%]">
                      <Row className="items-start justify-between w-[97%]">
                        <Image
                          src={"images/img_rectangle89_2.png"}
                          className="h-[104px] lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] object-contain rounded-radius1426 w-[45%]"
                          alt="Rectangle89"
                        />
                        <Column className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] w-[44%]">
                          <Text className="font-bold ml-[0] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            Victor Braman
                          </Text>
                          <Text className="font-normal 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            Back-end Dev
                          </Text>
                          <Button className="bg-white_A700 font-normal lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] not-italic lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] py-[6px] rounded-radius713 shadow-bs7 xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-center text-gray_900 w-[100%]">
                            22/04/2022
                          </Button>
                        </Column>
                      </Row>
                      <Row className="items-end justify-between 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                        <SelectBox
                          className="bg-white_A700 font-normal lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pb-[8px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius713 shadow-bs7 xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[42%]"
                          placeholderClassName="bg-transparent text-gray_900"
                          name="Group33"
                          placeholder="Virtual"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Image
                              src={"images/img_vector_33.png"}
                              className="w-[12.32px] h-[5.72px] mr-[7px] object-contain lg:w-[7px] lg:h-[4px] lg:mr-[4px] xl:w-[8px] xl:h-[4px] xl:mr-[4px] 2xl:w-[9px] 2xl:h-[5px] 2xl:mr-[5px] 3xl:w-[11px] 3xl:h-[6px] 3xl:mr-[6px]"
                              alt="Vector"
                            />
                          }
                        ></SelectBox>
                        <Button className="bg-blue_800 font-bold mb-[1px] py-[11px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-white_A700 w-[46%]">
                          Schedule
                        </Button>
                      </Row>
                    </Column>
                    <Stack className="absolute lg:h-[129px] xl:h-[148px] 2xl:h-[166px] 3xl:h-[200px] h-[221px] outline outline-[0.355px] outline-blue_800 lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] p-[6px] rounded-radius1426 w-[100%]">
                      <Image
                        src={"images/img_plus_7.png"}
                        className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] object-contain right-[1%] w-[8%]"
                        alt="Plus"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="lg:h-[126px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] h-[216px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] mt-[0] lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] pr-[5px] w-[48%]">
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[91%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_rectangle89_3.png"}
                          className="h-[102px] lg:h-[60px] xl:h-[69px] 2xl:h-[77px] 3xl:h-[92px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] object-contain rounded-radius1426 w-[41%]"
                          alt="Rectangle89"
                        />
                        <Column className="items-start justify-start 2xl:mb-[10px] 3xl:mb-[12px] mb-[14px] lg:mb-[8px] xl:mb-[9px] w-[49%]">
                          <Text className="font-bold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            John Doe
                          </Text>
                          <Text className="font-normal ml-[0] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                            Snr Product designer
                          </Text>
                          <Column className="bg-white_A700 items-start justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] p-[4px] rounded-radius713 shadow-bs7 w-[83%]">
                            <Text className="font-normal lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] not-italic xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[auto]">
                              22/04/2022
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-end justify-start ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[95%]">
                        <SelectBox
                          className="bg-white_A700 font-normal lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] xl:pb-[4px] lg:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] pb-[7px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[10px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius713 shadow-bs7 xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17.11px] lg:text-[9px] text-gray_900 w-[42%]"
                          placeholderClassName="bg-transparent text-gray_900"
                          name="Group33"
                          placeholder="Virtual"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Image
                              src={"images/img_vector_34.png"}
                              className="w-[12.24px] h-[5.61px] mr-[9px] object-contain lg:w-[7px] lg:h-[4px] lg:mr-[5px] xl:w-[8px] xl:h-[4px] xl:mr-[6px] 2xl:w-[9px] 2xl:h-[5px] 2xl:mr-[6px] 3xl:w-[11px] 3xl:h-[6px] 3xl:mr-[8px]"
                              alt="Vector"
                            />
                          }
                        ></SelectBox>
                        <Column className="bg-blue_800 items-center justify-end mb-[0] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] p-[11px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius10 w-[46%]">
                          <Text className="font-bold mt-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                            Schedule
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Stack className="absolute lg:h-[126px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] h-[216px] outline outline-[0.355px] outline-blue_800 lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px] rounded-radius1426 w-[100%]">
                      <Image
                        src={"images/img_plus_8.png"}
                        className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] object-contain right-[0] w-[8%]"
                        alt="Plus"
                      />
                    </Stack>
                  </Stack>
                </Row>
              </Column>
              <Stack className="absolute bg-white_A700 lg:h-[25px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] h-[42px] inset-x-[0] mx-[auto] w-[89%]">
                <Stack className="absolute bg-white_A700 lg:h-[25px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] h-[42px] lg:pr-[512px] xl:pr-[586px] 2xl:pr-[659px] 3xl:pr-[791px] pr-[879px] right-[0] w-[100%]">
                  <Image
                    src={"images/img_logo_15.png"}
                    className="absolute lg:h-[25px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] h-[42px] object-contain w-[100%]"
                    alt="Logo"
                  />
                </Stack>
                <Row className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] lg:pr-[1px] 3xl:pr-[2px] 2xl:pr-[2px] xl:pr-[2px] pr-[3px] w-[40%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] pr-[35px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
                    WrapClassName="2xl:p-[9px] 3xl:px-[11px] 3xl:py-[10px] bg-gray_200 flex lg:p-[7px] px-[13px] py-[12px] rounded-radius1426 w-[50%] xl:p-[8px]"
                    name="Frame117"
                    placeholder="Search"
                    suffix={
                      <Image
                        onClick={() => setInputvalue("")}
                        src={
                          inputvalue?.length
                            ? "images/close12.svg"
                            : "images/img_magnifyingglass_13.png"
                        }
                        className="cursor-pointer w-[17.11px] h-[17.11px] lg:w-[9px] lg:h-[10px] xl:w-[11px] xl:h-[12px] 2xl:w-[12px] 2xl:h-[13px] 3xl:w-[15px] 3xl:h-[16px] my-[auto]"
                        alt="MagnifyingGlass"
                      />
                    }
                  ></Input>
                  <Button className="bg-gray_200 flex lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] 2xl:p-[3px] p-[4px] rounded-radius1381 lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]">
                    <Image
                      src={"images/img_group5_15.png"}
                      className="w-[17.66px] h-[17.66px] flex items-center justify-center lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[15px] 3xl:h-[16px]"
                      alt="Group5"
                    />
                  </Button>
                  <Stack className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[7%]">
                    <Button className="absolute bg-gray_200 flex lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] items-center justify-center lg:p-[1px] 3xl:p-[2px] 2xl:p-[2px] xl:p-[2px] p-[3px] rounded-radius1381 w-[100%]">
                      <Image
                        src={"images/img_group309.png"}
                        className="w-[17.66px] h-[17.66px] flex items-center justify-center lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[15px] 3xl:h-[16px]"
                        alt="Group309"
                      />
                    </Button>
                    <Text className="absolute bg-red_A701 font-normal 2xl:h-[10px] 3xl:h-[12px] h-[13px] lg:h-[8px] xl:h-[9px] not-italic lg:pl-[2px] 3xl:pl-[3px] 2xl:pl-[3px] pl-[4px] lg:pr-[1px] 3xl:pr-[2px] 2xl:pr-[2px] pr-[3px] xl:px-[2px] py-[1px] rounded-radius691 lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.29px] text-white_A700 w-[auto]">
                      3
                    </Text>
                  </Stack>
                  <Image
                    src={"images/img_ellipse18.png"}
                    className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse18"
                  />
                  <Image
                    src={"images/img_vector_35.png"}
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[15px] lg:mb-[8px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] xl:my-[10px] object-contain w-[3%]"
                    alt="Vector"
                  />
                </Row>
              </Stack>
            </Stack>
            <Column
              className="absolute bg-cover bg-repeat items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] p-[16px] lg:p-[9px] rounded-radius2852 shadow-bs8 w-[26%]"
              style={{ backgroundImage: "url('images/img_frame120.png')" }}
            >
              <Image
                src={"images/img_image2.png"}
                className="3xl:h-[103px] h-[114px] lg:h-[67px] xl:h-[77px] 2xl:h-[86px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] object-contain rounded-radius50 w-[auto]"
                alt="image2"
              />
              <Text className="font-bold xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-[22.81px] text-gray_900 w-[auto]">
                Daniel James
              </Text>
              <Column className="items-center justify-start lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[41%]">
                <Text className="font-medium 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900 w-[auto]">
                  Product designer
                </Text>
                <Text className="font-bold lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_900 w-[auto]">
                  4 Years Experience
                </Text>
              </Column>
              <Row className="items-center justify-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[80%]">
                <Button className="font-normal not-italic outline outline-[0.355px] outline-blue_800 lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] py-[5px] rounded-radius713 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-center text-gray_900 w-[37%]">
                  Adobe XD
                </Button>
                <Button className="font-normal lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] not-italic outline outline-[0.355px] outline-blue_800 lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] py-[5px] rounded-radius713 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-center text-gray_900 w-[27%]">
                  Figma
                </Button>
                <Button className="font-normal lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] not-italic outline outline-[0.355px] outline-blue_800 lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] py-[5px] rounded-radius713 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-center text-gray_900 w-[29%]">
                  Sketch
                </Button>
              </Row>
              <Button className="bg-blue_800 font-bold lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] py-[11px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius713 shadow-bs9 3xl:text-[10px] text-[11.41px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-center text-white_A700 w-[96%]">
                View resume
              </Button>
            </Column>
          </Stack>
          <Stack className="lg:h-[371px] xl:h-[425px] 2xl:h-[478px] 3xl:h-[573px] h-[636px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[25px] 3xl:ml-[114px] ml-[127px] lg:ml-[74px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] mt-[85px] rounded-radius47 shadow-bs10 w-[28%]">
            <div className="absolute bg-blue_800 lg:h-[361px] xl:h-[413px] 2xl:h-[464px] 3xl:h-[557px] h-[618px] rounded-radius4755 top-[3%] w-[100%]"></div>
            <Column className="absolute bg-white_A700 bottom-[3%] items-center justify-center outline outline-[0.595px] outline-blue_800 lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] p-[24px] rounded-radius4755 shadow-bs11 w-[100%]">
              <Image
                src={"images/img_image2_1.png"}
                className="lg:h-[111px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[172px] h-[190px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] object-contain rounded-radius50 w-[auto]"
                alt="image2"
              />
              <Text className="font-bold lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[34px] text-[38.04px] text-gray_900 w-[auto]">
                Edet John-Smith
              </Text>
              <Text className="font-medium mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-gray_900 w-[auto]">
                Senior product designer
              </Text>
              <Text className="font-bold mt-[0] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-gray_900 w-[auto]">
                10 Years Experience
              </Text>
              <Row className="items-center justify-center lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[82%]">
                <Button className="font-normal not-italic outline outline-[0.595px] outline-blue_800 lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] rounded-radius1189 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-center text-gray_900 w-[35%]">
                  Facebook
                </Button>
                <Button className="font-normal lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] not-italic outline outline-[0.595px] outline-blue_800 lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] rounded-radius1189 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-center text-gray_900 w-[35%]">
                  Microsoft
                </Button>
                <Button className="font-normal lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] not-italic outline outline-[0.595px] outline-blue_800 lg:py-[5px] 2xl:py-[6px] xl:py-[6px] 3xl:py-[8px] py-[9px] rounded-radius1189 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-center text-gray_900 w-[24%]">
                  Meta
                </Button>
              </Row>
              <Text className="font-normal leading-[normal] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] not-italic lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-center text-gray_900 w-[100%]">
                Edet is is a vastly learned product designer with dream to pass
                down his knowledge to younger generation ...
              </Text>
              <Button className="bg-blue_800 font-bold mb-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:py-[11px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] py-[19px] rounded-radius1189 shadow-bs12 lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.02px] text-center text-white_A700 w-[90%]">
                Schedule Session
              </Button>
            </Column>
          </Stack>
        </Row>
        <Column className="font-inter items-start xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[149px] mt-[166px] lg:mt-[96px] 3xl:px-[117px] px-[131px] lg:px-[76px] xl:px-[87px] 2xl:px-[98px] w-[100%]">
          <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 w-[auto]">
            Our Focus
          </Text>
          <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[12%]"></div>
        </Column>
        <Row className="items-start justify-start mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[84%]">
          <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:pr-[44px] xl:pr-[50px] 2xl:pr-[57px] 3xl:pr-[68px] pr-[76px] w-[52%]">
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] w-[100%]"></div>
            <Text className="font-medium font-ubuntu leading-[normal] 2xl:ml-[105px] 3xl:ml-[126px] ml-[140px] lg:ml-[81px] xl:ml-[93px] lg:mt-[324px] xl:mt-[371px] 2xl:mt-[418px] 3xl:mt-[501px] mt-[557px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[79%]">
              Our project-based learning model <br />
              connects talents and interns to <br />
              on-going practical mentorship which <br />
              enables them to fast track skills <br />
              development, incease project <br />
              experience,build effective team <br />
              interaction virtually and develop <br />
              soft skills, improve portfolio, and better <br />
              position them for opportuities
            </Text>
            <Button className="bg-gray_500 font-bold font-inter 2xl:ml-[105px] 3xl:ml-[126px] ml-[140px] lg:ml-[81px] xl:ml-[93px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[44%]">
              Join Accelerator
            </Button>
            <Text className="font-bold font-inter leading-[normal] lg:mt-[170px] xl:mt-[194px] 2xl:mt-[219px] 3xl:mt-[262px] mt-[292px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 text-left w-[98%]">
              Build an innovation and <br />
              delivery minded team
            </Text>
            <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[35%]"></div>
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[100%]"></div>
            <Text className="font-medium font-ubuntu leading-[normal] 2xl:ml-[105px] 3xl:ml-[126px] ml-[140px] lg:ml-[81px] xl:ml-[93px] lg:mt-[387px] xl:mt-[443px] 2xl:mt-[499px] 3xl:mt-[598px] mt-[665px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[73%]">
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
            <Button className="bg-gray_500 font-bold font-inter 2xl:ml-[105px] 3xl:ml-[126px] ml-[140px] lg:ml-[81px] xl:ml-[93px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mt-[95px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[37%]">
              Join wiSTEM
            </Button>
          </Column>
          <Column className="items-start justify-start xl:mt-[112px] 2xl:mt-[126px] 3xl:mt-[152px] mt-[169px] lg:mt-[98px] w-[48%]">
            <Text className="font-medium font-ubuntu leading-[normal] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[72%]">
              Building a tribe of self-motivated and <br />
              innovative talents to build products, <br />
              drive engineering, research and <br />
              innovations for organzatons
            </Text>
            <Row className="font-inter items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69px] w-[45%]">
              <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 w-[auto]">
                Find out more
              </Text>
              <Image
                src={"images/img_arrowright_1.png"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] ml-[109px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[98px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain w-[9%]"
                alt="ArrowRight"
              />
            </Row>
            <Text className="font-bold font-inter leading-[normal] lg:mt-[194px] xl:mt-[222px] 2xl:mt-[249px] 3xl:mt-[299px] mt-[333px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 text-left w-[100%]">
              Grow, Get opportunities, <br />
              secure your future
            </Text>
            <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[34%]"></div>
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[97%]"></div>
            <Text className="font-medium font-ubuntu leading-[normal] lg:mt-[396px] xl:mt-[453px] 2xl:mt-[509px] 3xl:mt-[611px] mt-[679px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_501 text-left w-[76%]">
              We have observed the challenges of <br />
              virtual teams and talents, seen the soft <br />
              skill gap, the shortage in experience <br />
              and challenges with productivity.
              <br />
              Build a team not only interested in the
              <br />
              coding but deeply passionate in solving <br />
              problems and with balanced skillset <br />
              to deliver result
            </Text>
            <Button className="bg-gray_500 font-bold font-inter lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] mt-[72px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[34%]">
              Hire Talents
            </Button>
            <Text className="font-bold font-inter leading-[normal] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] lg:mt-[211px] xl:mt-[241px] 2xl:mt-[271px] 3xl:mt-[325px] mt-[362px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-gray_501 text-left w-[83%]">
              We propel women in <br />
              STEM
            </Text>
            <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[34%]"></div>
            <div className="bg-gray_501 lg:h-[363px] xl:h-[415px] 2xl:h-[467px] 3xl:h-[561px] h-[622px] lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mt-[111px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[97%]"></div>
          </Column>
        </Row>
        <Text className="font-bold leading-[normal] lg:mt-[152px] xl:mt-[174px] 2xl:mt-[196px] 3xl:mt-[235px] mt-[262px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-center text-gray_501 w-[78%]">
          Access our pool of accelerated or vetted <br />
          african tech, engineering and innovation Talents
        </Text>
        <div className="bg-bluegray_100 2xl:h-[10px] 3xl:h-[11px] h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] w-[14%]"></div>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[112px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[173px] mt-[193px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Back-End Engineers
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] 2xl:mr-[10px] 3xl:mr-[12px] mr-[14px] lg:mr-[8px] xl:mr-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Front-End Engineers
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-start mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Full Stack Engineers
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[115px] xl:px-[132px] 2xl:px-[148px] 3xl:px-[178px] px-[198px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[43px] 2xl:ml-[48px] 3xl:ml-[58px] ml-[65px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Data Scientists
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Mobile engineer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-start mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] ml-[52px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              React Developer
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[115px] xl:px-[132px] 2xl:px-[148px] 3xl:px-[178px] px-[198px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] ml-[44px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Android Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mr-[29px] xl:mr-[34px] 2xl:mr-[38px] 3xl:mr-[45px] mr-[51px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              iOS Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-start mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              React Native Dev
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[115px] xl:px-[132px] 2xl:px-[148px] 3xl:px-[178px] px-[198px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Python Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] mr-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Node.Js Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-start mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Javascript Developer
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[115px] xl:px-[132px] 2xl:px-[148px] 3xl:px-[178px] px-[198px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[61px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Java Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[43px] 3xl:mr-[52px] mr-[58px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              C# Developer
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              UX/UI Developer
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[117px] xl:px-[134px] 2xl:px-[150px] 3xl:px-[181px] px-[201px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <List
          className="font-inter xl:gap-[102px] 2xl:gap-[115px] 3xl:gap-[138px] gap-[154px] lg:gap-[89px] grid grid-cols-3 min-h-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[79%]"
          orientation="horizontal"
        >
          <Row className="bg-bluegray_100 items-center justify-start mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Research Assistant
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mt-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] mr-[16px] lg:mr-[9px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              iOT & Embedded Sys
            </Text>
          </Row>
          <Row className="bg-bluegray_100 items-center justify-center mb-[1px] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius20 w-[100%]">
            <div className="bg-gray_501 lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] h-[74px] ml-[1px] rounded-radius10 w-[25%]"></div>
            <Text className="font-bold lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Robotics Engineer
            </Text>
          </Row>
        </List>
        <Column className="font-inter items-start xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:px-[117px] xl:px-[134px] 2xl:px-[150px] 3xl:px-[181px] px-[201px] w-[100%]">
          <Row className="items-center justify-start w-[80%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[411px] ml-[457px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
            <Text className="font-medium mb-[1px] lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_501 w-[auto]">
              Hire now
            </Text>
          </Row>
        </Column>
        <Button className="bg-gray_500 font-bold lg:mt-[52px] xl:mt-[60px] 2xl:mt-[67px] 3xl:mt-[81px] mt-[90px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[12%]">
          Hire Now
        </Button>
        <Column className="bg-gray_501 font-inter items-center justify-start mt-[109px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[98px] lg:p-[22px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] p-[39px] w-[100%]">
          <Text className="font-bold lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
            News and Events
          </Text>
          <Row className="font-ubuntu items-start justify-between lg:mb-[111px] xl:mb-[127px] 2xl:mb-[143px] 3xl:mb-[171px] mb-[191px] 3xl:mt-[108px] mt-[121px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[88%]">
            <Image
              src={"images/img_vector_36.png"}
              className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[1%]"
              alt="Vector"
            />
            <Text className="font-medium leading-[normal] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-center text-white_A700 w-[65%]">
              Innotals is africa’s best talent accelerator providing world-class
              talents <br />
              with exceptional soft skills
            </Text>
            <Image
              src={"images/img_vector_37.png"}
              className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] h-[30px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </Column>
        <Column className="bg-gray_901 justify-start 3xl:mt-[108px] mt-[121px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:p-[33px] xl:p-[38px] 2xl:p-[42px] 3xl:p-[51px] p-[57px] w-[87%]">
          <Line className="bg-gray_51 h-[88px] mx-[auto] w-[6%]" />
          <Text className="font-inter font-normal lg:ml-[265px] xl:ml-[303px] 2xl:ml-[341px] 3xl:ml-[409px] ml-[455px] lg:mr-[266px] xl:mr-[304px] 2xl:mr-[342px] 3xl:mr-[410px] mr-[456px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-gray_51 w-[auto]">
            Subscribe to our Newsletter
          </Text>
          <Text className="font-normal font-ubuntu lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] leading-[40.00px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] mx-[auto] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_51 w-[40%]">
            To be the first to get notified on upcoming events and the release
            of our newsletters.
          </Text>
          <Text className="font-medium font-ubuntu 3xl:ml-[101px] ml-[113px] lg:ml-[65px] xl:ml-[75px] 2xl:ml-[84px] 3xl:mr-[1074px] mr-[1193px] lg:mr-[695px] xl:mr-[795px] 2xl:mr-[895px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_50_af w-[auto]">
            EMAIL ADDRESS
          </Text>
          <Row className="font-ubuntu items-center justify-start lg:mb-[44px] xl:mb-[50px] 2xl:mb-[57px] 3xl:mb-[68px] mb-[76px] ml-[103px] lg:ml-[60px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] 2xl:mr-[107px] 3xl:mr-[128px] mr-[143px] lg:mr-[83px] xl:mr-[95px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[84%]">
            <Column className="border-bw5 border-solid border-white_A700 items-start lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] p-[36px] w-[74%]">
              <Text className="font-normal xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_51 w-[auto]">
                abayomi.tosin2017@gmail.com
              </Text>
            </Column>
            <Column className="bg-white_A700 font-inter items-center mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] p-[48px] w-[25%]">
              <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-gray_901 w-[auto]">
                Subscribe
              </Text>
            </Column>
          </Row>
        </Column>
        <Stack className="bg-gray_901 lg:h-[575px] xl:h-[658px] 2xl:h-[740px] 3xl:h-[888px] h-[985px] lg:mt-[153px] xl:mt-[175px] 2xl:mt-[197px] 3xl:mt-[236px] mt-[263px] lg:p-[47px] xl:p-[54px] 2xl:p-[60px] 3xl:p-[72px] p-[81px] w-[100%]">
          <Image
            src={"images/img_whiteinnotals_10.png"}
            className="absolute 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] left-[2%] object-contain w-[15%]"
            alt="WHiteInnotals"
          />
        </Stack>
      </Column>
    </>
  );
};

export default LandingpagePage;
