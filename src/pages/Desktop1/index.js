import React from "react";

import {
  Column,
  Image,
  Line,
  Row,
  Stack,
  Text,
  Button,
  List,
} from "components";

const Desktop1Page = () => {
  return (
    <>
      <Column className="bg-white_A700 border-8 border-green_900 border-solid font-roboto justify-start mx-[auto] lg:py-[16px] xl:py-[18px] py-[21px] 3xl:py-[25px] w-[100%]">
        <Image
          src={"images/img_logo_28.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pl-[31px] xl:pl-[35px] pl-[40px] 3xl:pl-[48px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
        </Column>
        <Row className="items-center justify-start lg:ml-[47px] xl:ml-[54px] ml-[61px] 3xl:ml-[73px] lg:mr-[108px] xl:mr-[123px] mr-[139px] 3xl:mr-[166px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] w-[86%]">
          <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
          <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
          <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
          <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
        </Row>
        <Column className="items-center 3xl:mb-[111px] lg:mb-[72px] xl:mb-[82px] mb-[93px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <Row className="items-start justify-end overflow-auto w-[100%]">
              <Image
                src={"images/img_star1.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star1"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_polygon6.png"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Polygon6"
              />
              <Image
                src={"images/img_star7.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star7"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_polygon12.png"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Polygon12"
              />
              <Image
                src={"images/img_star12.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star12"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_polygon18.png"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Polygon18"
              />
              <Image
                src={"images/img_star17.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star17"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_polygon24.png"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[26px] xl:mb-[30px] mb-[34px] 3xl:mb-[40px] lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Polygon24"
              />
            </Row>
          </div>
          <div className="lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] overflow-x-auto w-[100%]">
            <Row className="items-start justify-end overflow-auto w-[100%]">
              <Column className="justify-start lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:pr-[52px] xl:pr-[59px] pr-[67px] 3xl:pr-[80px] w-[27%]">
                <Row className="items-start justify-start w-[100%]">
                  <Image
                    src={"images/img_polygon5.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Polygon5"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[196px] xl:ml-[225px] ml-[253px] 3xl:ml-[303px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
                <Row className="items-start justify-start lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mr-[111px] xl:mr-[127px] mr-[143px] 3xl:mr-[171px] lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[52%]">
                  <Image
                    src={"images/img_star5.png"}
                    className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Star5"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
                <Row className="items-start justify-start lg:ml-[40px] xl:ml-[46px] ml-[52px] 3xl:ml-[62px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] w-[82%]">
                  <Image
                    src={"images/img_polygon4.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Polygon4"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
              </Column>
              <Stack className="lg:h-[226px] xl:h-[258px] h-[290px] 2xl:h-[291px] 3xl:h-[349px] w-[50%]">
                <Column className="absolute justify-start w-[100%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Image
                      src={"images/img_polygon11.png"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Polygon11"
                    />
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[196px] xl:ml-[225px] ml-[253px] 3xl:ml-[303px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                    <Image
                      src={"images/img_polygon17.png"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Polygon17"
                    />
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[196px] xl:ml-[225px] ml-[253px] 3xl:ml-[303px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  </Row>
                  <Row className="items-start justify-start lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mr-[111px] xl:mr-[127px] mr-[143px] 3xl:mr-[171px] lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[78%]">
                    <Image
                      src={"images/img_star10.png"}
                      className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Star10"
                    />
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  </Row>
                  <Row className="items-start justify-end ml-[auto] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] w-[92%]">
                    <Image
                      src={"images/img_polygon10.png"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Polygon10"
                    />
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                    <Image
                      src={"images/img_polygon16.png"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Polygon16"
                    />
                    <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                  </Row>
                </Column>
                <Image
                  src={"images/img_star15.png"}
                  className="absolute border-4 border-orange_50 border-solid bottom-[36%] lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain right-[38%] lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Star15"
                />
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] w-[91%]">
                  <Text className="font-bold lg:text-[40px] xl:text-[46px] text-[51.96px] 2xl:text-[51px] 3xl:text-[62px] text-gray_900 w-[auto]">
                    We sent a confirmation mail
                  </Text>
                  <Text className="font-medium leading-[normal] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-[19px] xl:text-[22px] text-[25.63px] 2xl:text-[25px] 3xl:text-[30px] text-center text-gray_800 w-[100%]">
                    <span className="text-gray_800 font-roboto">
                      Check your mai
                    </span>
                    <span className="text-blue_700 font-roboto">
                      l johnfelix247@gmail.com
                    </span>
                    <span className="text-gray_800 font-roboto">
                      {" "}
                      and click on the <br />
                      link to confirm your email and continue your sign up
                    </span>
                  </Text>
                  <Button className="bg-blue_800 font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[31%]">
                    Go to mail
                  </Button>
                </Column>
              </Stack>
              <Column className="justify-start lg:ml-[52px] xl:ml-[59px] ml-[67px] 3xl:ml-[80px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[23%]">
                <Row className="items-start justify-between w-[100%]">
                  <Image
                    src={"images/img_polygon23.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Polygon23"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
                <Row className="items-start justify-start lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mr-[111px] xl:mr-[127px] mr-[143px] 3xl:mr-[171px] lg:mt-[41px] xl:mt-[47px] mt-[53px] 3xl:mt-[63px] w-[52%]">
                  <Image
                    src={"images/img_star20.png"}
                    className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Star20"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
                <Row className="items-start justify-end ml-[auto] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] w-[82%]">
                  <Image
                    src={"images/img_polygon22.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Polygon22"
                  />
                  <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
                </Row>
              </Column>
            </Row>
          </div>
          <Column className="items-center justify-start w-[99%]">
            <Row className="items-start justify-start lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] w-[100%]">
              <Image
                src={"images/img_star6.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star6"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_star4.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star4"
              />
              <Image
                src={"images/img_star11.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star11"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_star9.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star9"
              />
              <Image
                src={"images/img_star16.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star16"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_star14.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star14"
              />
              <Image
                src={"images/img_star21.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star21"
              />
              <div className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"></div>
              <Image
                src={"images/img_star19.png"}
                className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Star19"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-start justify-end lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:my-[26px] xl:my-[29px] my-[33.5px] 2xl:my-[33px] 3xl:my-[40px] overflow-auto w-[98%]">
                <Image
                  src={"images/img_polygon3.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon3"
                />
                <Image
                  src={"images/img_polygon2.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[144px] xl:ml-[165px] ml-[186px] 3xl:ml-[223px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon2"
                />
                <Image
                  src={"images/img_polygon9.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon9"
                />
                <Image
                  src={"images/img_polygon8.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[144px] xl:ml-[165px] ml-[186px] 3xl:ml-[223px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon8"
                />
                <Image
                  src={"images/img_polygon15.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon15"
                />
                <Image
                  src={"images/img_polygon14.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[144px] xl:ml-[165px] ml-[186px] 3xl:ml-[223px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon14"
                />
                <Image
                  src={"images/img_polygon21.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon21"
                />
                <Image
                  src={"images/img_polygon20.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[144px] xl:ml-[165px] ml-[186px] 3xl:ml-[223px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon20"
                />
              </Row>
              <Row className="items-center justify-end lg:my-[26px] xl:my-[29px] my-[33.5px] 2xl:my-[33px] 3xl:my-[40px] overflow-auto w-[100%]">
                <Image
                  src={"images/img_polygon1.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon1"
                />
                <Image
                  src={"images/img_star2.png"}
                  className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Star2"
                />
                <Image
                  src={"images/img_polygon7.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon7"
                />
                <Image
                  src={"images/img_star8.png"}
                  className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Star8"
                />
                <Image
                  src={"images/img_polygon13.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon13"
                />
                <Image
                  src={"images/img_star13.png"}
                  className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Star13"
                />
                <Image
                  src={"images/img_polygon19.png"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Polygon19"
                />
                <Image
                  src={"images/img_star18.png"}
                  className="border-4 border-orange_50 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[178px] xl:ml-[204px] ml-[230px] 3xl:ml-[276px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Star18"
                />
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Desktop1Page;
