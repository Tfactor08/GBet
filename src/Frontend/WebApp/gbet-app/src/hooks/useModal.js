import { useCallback } from "react"

export const useModal = () => {
    return useCallback((text) => {
        if (window.M && text) {
            const modalHtml = document.getElementById('#modal1')
            const modal = window.M.Modal.getInstance(modalHtml)
            modal.open()
        }
    }, [])
}