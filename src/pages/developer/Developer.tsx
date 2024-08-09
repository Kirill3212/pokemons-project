import {
  VStack,
  Flex,
  Text,
  Divider,
  Image,
  keyframes,
  Box,
} from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaJira } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiJest } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaConfluence } from "react-icons/fa";

import me from "@/assets/meClose.jpg";
import fire from "@/assets/fire.gif";

const Developer = () => {
  const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

  return (
    <VStack gap={"10px"} mt={"-40px"}>
      <Text fontSize="xl" color={"pink.400"}>
        About me
      </Text>
      <Text>
        I am a frontend developer with a <strong>2+ years</strong> of experience
      </Text>

      <Divider width={"34%"} borderColor={"pink.400"} />
      <Flex gap={"10px"} mb={"20px"}>
        <Text fontSize="m" color={"grey"}>
          Skills:
        </Text>
        <Flex alignItems={"center"} gap={"1"}>
          <IoLogoJavascript size={"20px"} />
          <BiLogoTypescript size={"23px"} />
          <TiHtml5 size={"23px"} />
          <MdCss size={"25px"} />
          <IoLogoSass size={"21px"} />
          <FaReact size={"21px"} />
          <TbBrandRedux size={"21px"} />
          <SiReactrouter size={"21px"} />
          <SiReacthookform size={"19px"} />
          <GrGraphQl size={"20px"} />
          <FaGitAlt size={"21px"} />
          <SiWebpack size={"21px"} />
          <TbBrandVite size={"22px"} />
          <SiJest size={"22px"} />
          <FaJira size={"21px"} />
          <FaConfluence size={"18px"} />
          <FaFigma size={"18px"} />
          <SiChakraui size={"18px"} />
        </Flex>
      </Flex>

      {/* VARIANT 1 */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        gap={"150px"}
      >
        <Image src={fire} boxSize="300px" />
        <Image
          src={me}
          alt="me :)"
          width={"23%"}
          mt={"60px"}
          animation={`${rotate} infinite 1.5s linear`}
        />
        <Image src={fire} boxSize="300px" />
      </Box>

      {/* VARIANT 2 */}
      {/* <Text fontSize="xl" color={"pink.400"}>
        Knowledge and Skills
      </Text>
      <VStack alignItems={"left"}>
        <Text>
          • Experienced in developing web applications using JavaScript,
          TypeScript, and front-end frameworks and libraries.
        </Text>
        <Text>
          • Skilled in creating maintainable and readable code, communicating
          with other team members to achieve optimal results.
        </Text>
        <Text>• Proficient in optimizing complex code sections.</Text>
        <Text>
          • Committed to continuous professional growth and rapid skill
          acquisition.
        </Text>
        <Text>
          • Motivated, active, punctual, responsible, willing to collaborate
          effectively within a team, detail-oriented, and committed to
          continuous professional development.
        </Text>
      </VStack>

      <Text fontSize="xl" color={"pink.400"}>
        Languages
      </Text>

      <VStack>
        <Text>English C1</Text>
        <Text>Spanish A2</Text>
      </VStack> */}

      {/* <ol style={{ marginTop: "20px", marginLeft: "15px" }}>
        <li>Add accordion chakra with questions</li>
        <li>My picture and experience stats</li>
        <li>Cool chakra stepper with changed indicator content</li>
        <li>
          Evolution display of a pokemon, not on this page, maybe create another
          one - https://pokeapi.co/docs/v2#evolution-chains
        </li>
      </ol> */}
    </VStack>
  );
};

export default Developer;
