import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Input,
  Button,
  Text,
  Line,
  Slider,
  PagerIndicator,
  List,
  SelectBox,
} from "components";

const Landingpage1Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
              <Image
                src={"images/img_logo_17.png"}
                className="absolute lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[98%]"
                alt="Logo"
              />
            </Stack>
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[40%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
                WrapClassName="3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:px-[14px] lg:py-[12px] px-[19px] py-[16px] rounded-radius20 w-[50%] xl:px-[16px] xl:py-[14px]"
                name="Frame117"
                placeholder="Search"
                suffix={
                  <Image
                    onClick={() => setInputvalue("")}
                    src={
                      inputvalue?.length
                        ? "images/close14.svg"
                        : "images/img_magnifyingglass_15.png"
                    }
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="MagnifyingGlass"
                  />
                }
              ></Input>
              <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                <Image
                  src={"images/img_group5_17.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group5"
                />
              </Button>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[8%]">
                <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                  <Image
                    src={"images/img_group353.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group353"
                  />
                </Button>
                <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                  3
                </Text>
              </Stack>
              <Image
                src={"images/img_ellipse18_2.png"}
                className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain rounded-radius50 w-[auto]"
                alt="Ellipse18"
              />
              <Image
                src={"images/img_vector_48.png"}
                className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain w-[3%]"
                alt="Vector"
              />
            </Row>
          </Stack>
        </header>
        <Column className="items-start justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-start w-[95%]">
            <Column className="bg-gray_50 items-start outline outline-[0.5px] outline-blue_800 lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] w-[18%]">
              <Row className="items-center justify-end lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[50%]">
                <Image
                  src={"images/img_vector_49.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                  Home
                </Text>
              </Row>
              <Input
                className="bg-transparent border-0 font-bold p-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                WrapClassName="3xl:mt-[25px] 3xl:pb-[24px] 3xl:pl-[28px] 3xl:pr-[38px] 3xl:pt-[21px] bg-blue_800 flex lg:mt-[16px] lg:pb-[15px] lg:pl-[18px] lg:pr-[24px] lg:pt-[14px] mt-[21px] pb-[20px] pl-[24px] pr-[32px] pt-[18px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:mt-[18px] xl:pb-[17px] xl:pl-[21px] xl:pr-[28px] xl:pt-[16px]"
                name="Group348"
                placeholder="Interview"
                prefix={
                  <Image
                    src={"images/img_suitcasesimple_12.png"}
                    className="w-[24.77px] h-[24.77px] lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                    alt="SuitcaseSimple"
                  />
                }
              ></Input>
              <Row className="items-center justify-end lg:mb-[476px] xl:mb-[544px] mb-[612px] 3xl:mb-[734px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[62%]">
                <Image
                  src={"images/img_gear_14.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Gear"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Settings
                </Text>
              </Row>
            </Column>
            <Column className="items-start lg:mb-[45px] xl:mb-[51px] mb-[58px] 3xl:mb-[69px] lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[78%]">
              <Text className="font-medium lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
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
                className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                items={[...Array(6)].map(() => (
                  <>
                    <Row className="items-end justify-start lg:mx-[15px] xl:mx-[17px] mx-[20px] 3xl:mx-[24px] outline outline-[0.5px] outline-blue_800 lg:p-[22px] xl:p-[25px] p-[29px] 3xl:p-[34px] rounded-radius20">
                      <Column className="items-center justify-start lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pr-[34px] xl:pr-[39px] pr-[44px] 3xl:pr-[52px] w-[49%]">
                        <Image
                          src={"images/img_rectangle89_8.png"}
                          className="lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] object-contain rounded-radius20 w-[99%]"
                          alt="Rectangle89"
                        />
                        <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_93 w-[auto]">
                          Virtual
                        </Text>
                      </Column>
                      <Column className="items-start justify-start w-[42%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Daniel james
                        </Text>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Product designer
                        </Text>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          22/04/2022
                        </Text>
                        <Button className="bg-blue_800 font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                          View bio
                        </Button>
                      </Column>
                    </Row>
                  </>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer w-[24px] h-[24px] bg-blue_800" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer w-[24px] h-[24px] outline-blue_800 outline-[0.5px] outline"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="h-[24px] lg:ml-[378px] xl:ml-[432px] ml-[486px] 3xl:ml-[583px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[auto]"
                count={3}
                activeCss="inline-block cursor-pointer w-[24px] h-[24px] bg-blue_800"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer w-[24px] h-[24px] outline-blue_800 outline-[0.5px] outline"
                sliderRef={sliderRef}
                selectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
                unselectedWrapperCss="2xl:mx-[6px] 3xl:mx-[7px] inline-block lg:mx-[4px] mx-[6.00px] xl:mx-[5px]"
              />
              <Text className="font-medium lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                Schedule new interview
              </Text>
              <List
                className="lg:gap-[34px] xl:gap-[39px] gap-[43.9px] 2xl:gap-[43px] 3xl:gap-[52px] grid grid-cols-2 min-h-[auto] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[242px] xl:h-[276px] h-[310px] 2xl:h-[311px] 3xl:h-[373px] w-[100%]">
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[86%]">
                    <Row className="items-start justify-between w-[97%]">
                      <Image
                        src={"images/img_rectangle89_10.png"}
                        className="lg:h-[115px] xl:h-[131px] h-[147px] 2xl:h-[148px] 3xl:h-[177px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain rounded-radius20 w-[45%]"
                        alt="Rectangle89"
                      />
                      <Column className="items-start justify-start lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] w-[44%]">
                        <Text className="font-bold ml-[0] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Victor Braman
                        </Text>
                        <Text className="font-normal lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Back-end Dev
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:pt-[5px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                          WrapClassName="3xl:mt-[15px] bg-white_A700 lg:mt-[10px] mt-[13px] rounded-radius10 shadow-bs17 w-[100%] xl:mt-[11px]"
                          name="Group32"
                          placeholder="22/04/2022"
                        ></Input>
                      </Column>
                    </Row>
                    <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <SelectBox
                        className="bg-white_A700 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[24px] xl:pl-[27px] pl-[31px] 3xl:pl-[37px] lg:pt-[10px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] rounded-radius10 shadow-bs17 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[42%]"
                        placeholderClassName="bg-transparent text-gray_900"
                        name="Group33"
                        placeholder="Virtual"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Image
                            src={"images/img_vector_50.png"}
                            className="w-[17.28px] h-[8.03px] mr-[10px] object-contain lg:w-[13px] lg:h-[7px] lg:mr-[7px] xl:w-[15px] xl:h-[8px] xl:mr-[8px] 2xl:w-[17px] 2xl:h-[9px] 3xl:w-[20px] 3xl:h-[10px] 3xl:mr-[12px]"
                            alt="Vector"
                          />
                        }
                      ></SelectBox>
                      <Button className="bg-blue_800 font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[46%]">
                        Schedule
                      </Button>
                    </Row>
                  </Column>
                  <Stack className="absolute lg:h-[242px] xl:h-[276px] h-[310px] 2xl:h-[311px] 3xl:h-[373px] outline outline-[0.5px] outline-blue_800 lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius20 w-[100%]">
                    <Image
                      src={"images/img_plus_11.png"}
                      className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain right-[1%] w-[8%]"
                      alt="Plus"
                    />
                  </Stack>
                </Stack>
                <Stack className="lg:h-[236px] xl:h-[270px] h-[303px] 2xl:h-[304px] 3xl:h-[364px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] mt-[1px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] w-[100%]">
                  <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[91%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Image
                        src={"images/img_rectangle89_11.png"}
                        className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain rounded-radius20 w-[41%]"
                        alt="Rectangle89"
                      />
                      <Column className="items-start justify-start lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] w-[48%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          John Doe
                        </Text>
                        <Text className="font-normal ml-[0] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Snr Product designer
                        </Text>
                        <Input
                          className="bg-transparent border-0 font-normal not-italic pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                          WrapClassName="3xl:mt-[14px] bg-white_A700 lg:mt-[9px] mt-[12px] rounded-radius10 shadow-bs17 w-[83%] xl:mt-[10px]"
                          name="Group32"
                          placeholder="22/04/2022"
                        ></Input>
                      </Column>
                    </Row>
                    <Row className="items-end justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[94%]">
                      <SelectBox
                        className="bg-white_A700 font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pl-[24px] xl:pl-[27px] pl-[31px] 3xl:pl-[37px] lg:pt-[10px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] rounded-radius10 shadow-bs17 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[42%]"
                        placeholderClassName="bg-transparent text-gray_900"
                        name="Group33"
                        placeholder="Virtual"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Image
                            src={"images/img_vector_51.png"}
                            className="w-[17.17px] h-[7.86px] mr-[13px] object-contain lg:w-[13px] lg:h-[7px] lg:mr-[10px] xl:w-[15px] xl:h-[7px] xl:mr-[11px] 2xl:w-[17px] 2xl:h-[8px] 3xl:w-[20px] 3xl:h-[10px] 3xl:mr-[15px]"
                            alt="Vector"
                          />
                        }
                      ></SelectBox>
                      <Button className="bg-blue_800 font-bold mb-[0] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[46%]">
                        Schedule
                      </Button>
                    </Row>
                  </Column>
                  <Stack className="absolute lg:h-[236px] xl:h-[270px] h-[303px] 2xl:h-[304px] 3xl:h-[364px] outline outline-[0.5px] outline-blue_800 lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px] rounded-radius20 w-[100%]">
                    <Image
                      src={"images/img_plus_12.png"}
                      className="absolute lg:h-[28px] xl:h-[32px] h-[35px] 2xl:h-[36px] 3xl:h-[43px] object-contain right-[0] w-[8%]"
                      alt="Plus"
                    />
                  </Stack>
                </Stack>
              </List>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Landingpage1Page;
