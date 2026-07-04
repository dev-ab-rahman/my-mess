import React, { useState } from 'react'
import Screen from '@/components/Screen'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Avatar from '@/components/Avatar'
import Section from '@/components/Section'
import Modal from '@/components/Modal'
import Input from '@/components/Input'
import {
  Mail,
  Lock,
  Eye,
} from "lucide-react-native";

export default function More() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Screen>
      <Text variant='hero'>more</Text>
      <Button title="OPEN Modal" onPress={() => setIsModalVisible(true)} />
      <Card>
        <Text variant='h1'>Card</Text>
      </Card>
      <Avatar name="John Doe" size="lg" uri='https://www.aniui.dev/_next/image?url=%2Flogo-dark.png&w=96&q=75' />

      <Section
        children={<Text variant='body'>Section</Text>}
        title="Section Title"
        subtitle="Section Subtitle"
        right={<Button title="Action" />}
      />


      <Input
        label="Email"
        placeholder="Enter email"
        leftIcon={
          <Mail
            size={18}
            color="rgba(255,255,255,0.7)"
          />
        }
      />

      <Input
        label="Password"
        secureTextEntry
        leftIcon={
          <Lock
            size={18}
            color="rgba(255,255,255,0.7)"
          />
        }
        rightIcon={
          <Eye
            size={18}
            color="rgba(255,255,255,0.7)"
          />
        }
      />

      <Modal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="More details"
        subtitle="This modal is opened from the more screen."
        variant="bottom"
      >
        <Text variant='body'>You can place any content here.</Text>
        <Button title="Close Modal" onPress={() => setIsModalVisible(false)} className="mt-4" />
      </Modal>
    </Screen>
  )
}