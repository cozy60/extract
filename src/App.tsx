import React from 'react';
import {
	ChakraProvider,
	Container,
	Box,
	Stack,
	Heading,
	Input,
	Textarea,
	Button,
} from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Container maxW={'md'} color="gray.600">
				<Box paddingTop={4} paddingBottom={4}>
					<Box h={360} borderRadius={2} bg="gray"></Box>

					<Stack mt={4} spacing={4}>
						<Box>
							<Heading as="h3" size="sm" mb={2}>
								배경 선택
							</Heading>
							<Stack spacing={4} direction="row" align="center">
								<Button size="sm">그라데이션</Button>
								<Button size="sm">이미지 검색</Button>
								<Button size="sm">이미지 업로드</Button>
							</Stack>
						</Box>

						<Box>
							<Heading as="h3" size="sm" mb={2}>
								작품명
							</Heading>
							<Input placeholder="작품명을 입력하세요" />
						</Box>

						<Box>
							<Heading as="h3" size="sm" mb={2}>
								작가명
							</Heading>
							<Input placeholder="작가명을 입력하세요" />
						</Box>

						<Box>
							<Heading as="h3" size="sm" mb={2}>
								발췌할 문장
							</Heading>
							<Textarea placeholder="문장을 입력하세요" />
						</Box>

						<Button w="100%" colorScheme="blue">
							저장
						</Button>
					</Stack>
				</Box>
			</Container>
		</ChakraProvider>
	);
}

export default App;
