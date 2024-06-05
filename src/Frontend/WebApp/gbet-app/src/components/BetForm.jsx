import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const BetForm = ({ create, bet }) => {

    const [betAmount, setBetAmount] = useState(0)

    const createBet = (e) => {
        e.preventDefault()
        create(bet.id, betAmount)
    }

    return (
      <Form>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Сумма ставки"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            required />
        </Form.Group>

        <Button onClick={createBet}>Сделать ставку</Button>
      </Form>
    )
}

export default BetForm