import SuperButton from '../common/SuperButton/SuperButton';
import SuperInputText from '../common/SuperInputText/SuperInputText';
import SuperEditableSpan from '../common/SuperEditableSpan/SuperEditableSpan';
import SuperCheckbox from '../common/SuperCheckbox/SuperCheckbox';
import SuperRadio from '../common/SuperRadio/SuperRadio';
import SuperSelect from '../common/SuperSelect/SuperSelect';
import {useState} from 'react';

export const Testing = () => {
    const [text, setText] = useState<string>('')

    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(true)

    const [value, setValue] = useState<string>('')

    const arr = ['Apple', 'Samsung', 'Nokia']

    const [selectValue, onChangeOption] = useState(arr[1])

    return (
        <div>
            <div>
                Customise button example: <br/>
                <SuperButton>
                    Submit
                </SuperButton>
            </div>
            <div>
                Customise input example(enter your text and press Enter): <br/>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />
            </div>
            <div>
                Customise checkbox example: <br/>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                />
            </div>
            <div>
                Customise span example(double click): <br/>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div>
                Customise select example: <br/>
                <SuperSelect
                    options={arr}
                    value={selectValue}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                Customise radio example: <br/>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={selectValue}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}