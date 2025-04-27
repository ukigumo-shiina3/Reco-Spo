with open('/home/ubuntu/repos/Reco-Spo/package.json', 'r') as f:
    content = f.read()
    pos = 481
    line_num = content[:pos].count('\n') + 1
    col_num = pos - content[:pos].rfind('\n')
    print(f'Position 481 is at line {line_num}, column {col_num}')
    print(f'Characters around position 481: {repr(content[pos-10:pos+10])}')
    lines = content.split('\n')
    print(f'Line {line_num}: {lines[line_num-1]}')
